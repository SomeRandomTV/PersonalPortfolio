
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import eidosData from '../data/eidos.json'

const EidosDetail = () => {
  const navigate = useNavigate()
  const [expandedGrammar, setExpandedGrammar] = useState(false)
  const [lexerInput, setLexerInput] = useState(`let x = 10;
x++;`)

  // Simple tokenizer simulation for Eidos language
  const tokenize = (code) => {
    const tokens = []
    const keywords = ['let', 'if', 'else', 'for', 'while', 'print', 'read']
    const operators = {
      '++': 'INC_OP', '--': 'DEC_OP', '==': 'EQUAL_OP', '!=': 'NEQUAL_OP',
      '<=': 'LEQUAL_OP', '>=': 'GEQUAL_OP', '=': 'ASSIGN_OP', '+': 'PLUS_OP',
      '-': 'SUB_OP', '*': 'MULT_OP', '/': 'DIV_OP', '<': 'LESSER_OP',
      '>': 'GREATER_OP', '!': 'NOT_OP'
    }
    const delimiters = {
      '(': 'LEFT_PAREN', ')': 'RIGHT_PAREN', '{': 'LEFT_CURL',
      '}': 'RIGHT_CURL', ';': 'SEMICOLON'
    }

    let i = 0
    while (i < code.length) {
      const char = code[i]

      // Skip whitespace
      if (/\s/.test(char)) {
        i++
        continue
      }

      // Check two-character operators
      if (i < code.length - 1) {
        const twoChar = code.substr(i, 2)
        if (operators[twoChar]) {
          tokens.push({ lexeme: twoChar, token: operators[twoChar] })
          i += 2
          continue
        }
      }

      // Check single-character operators and delimiters
      if (operators[char]) {
        tokens.push({ lexeme: char, token: operators[char] })
        i++
        continue
      }
      if (delimiters[char]) {
        tokens.push({ lexeme: char, token: delimiters[char] })
        i++
        continue
      }

      // Check for numbers
      if (/\d/.test(char)) {
        let num = ''
        while (i < code.length && /\d/.test(code[i])) {
          num += code[i]
          i++
        }
        tokens.push({ lexeme: num, token: 'INT_LIT' })
        continue
      }

      // Check for identifiers/keywords
      if (/[a-zA-Z_]/.test(char)) {
        let word = ''
        while (i < code.length && /[a-zA-Z0-9_]/.test(code[i])) {
          word += code[i]
          i++
        }
        if (keywords.includes(word)) {
          tokens.push({ lexeme: word, token: 'KEYWORD_' + word.toUpperCase() })
        } else {
          tokens.push({ lexeme: word, token: 'IDENTIFIER' })
        }
        continue
      }

      i++
    }

    return tokens
  }

  const lexerOutput = tokenize(lexerInput)

  const bnfGrammar = `<program> ::= <stmts>
<stmts>   ::= <stmt> <stmts> | ε

<stmt> ::= <var_decl>
         | <assignment_stmt>
         | <if_stmt>
         | <loop_stmt>
         | <io_stmt>
         | <inc_dec_stmt>

<var_decl> ::= 'let' IDENTIFIER '=' <expr> ';'

<assignment_stmt> ::= IDENTIFIER '=' <expr> ';'

<if_stmt> ::= 'if' '(' <conditional> ')' '{' <stmts> '}'
            | 'if' '(' <conditional> ')' '{' <stmts> '}' 'else' '{' <stmts> '}'

<loop_stmt> ::= 'while' '(' <conditional> ')' '{' <stmts> '}' 
              | 'for' '(' <assignment_stmt> <conditional> ';' <inc_dec_stmt> ')' '{' <stmts> '}'

<io_stmt> ::= 'print' '(' <expr> ')' ';'
            | 'read' '(' IDENTIFIER ')' ';'

<inc_dec_stmt> ::= IDENTIFIER '++' ';'
                 | IDENTIFIER '--' ';'
                 | '++' IDENTIFIER ';'
                 | '--' IDENTIFIER ';'

<conditional> ::= <expr> COMPARISON_OP <expr>

<expr> ::= <expr> '+' <term> | <expr> '-' <term> | <term>
<term> ::= <term> '*' <factor> | <term> '/' <factor> | <factor>
<factor> ::= '(' <expr> ')' | IDENTIFIER | NUMBER

COMPARISON_OP ::= '==' | '!=' | '<' | '>' | '<=' | '>='`

  const tokenTable = [
    { category: 'Keywords', tokens: [
      { symbol: 'print', type: 'KEYWORD_PRINT' },
      { symbol: 'read', type: 'KEYWORD_READ' },
      { symbol: 'for', type: 'KEYWORD_FOR' },
      { symbol: 'let', type: 'KEYWORD_LET' },
      { symbol: 'while', type: 'KEYWORD_WHILE' },
      { symbol: 'if', type: 'KEYWORD_IF' },
      { symbol: 'else', type: 'KEYWORD_ELSE' }
    ]},
    { category: 'Operators', tokens: [
      { symbol: '+', type: 'PLUS_OP' },
      { symbol: '-', type: 'SUB_OP' },
      { symbol: '*', type: 'MULT_OP' },
      { symbol: '/', type: 'DIV_OP' },
      { symbol: '!', type: 'NOT_OP' },
      { symbol: '++', type: 'INC_OP' },
      { symbol: '--', type: 'DEC_OP' },
      { symbol: '>', type: 'GREATER_OP' },
      { symbol: '<', type: 'LESSER_OP' },
      { symbol: '>=', type: 'GEQUAL_OP' },
      { symbol: '<=', type: 'LEQUAL_OP' },
      { symbol: '==', type: 'EQUAL_OP' },
      { symbol: '!=', type: 'NEQUAL_OP' },
      { symbol: '=', type: 'ASSIGN_OP' }
    ]},
    { category: 'Delimiters', tokens: [
      { symbol: '(', type: 'LEFT_PAREN' },
      { symbol: ')', type: 'RIGHT_PAREN' },
      { symbol: '{', type: 'LEFT_CURL' },
      { symbol: '}', type: 'RIGHT_CURL' },
      { symbol: ';', type: 'SEMICOLON' }
    ]},
    { category: 'Literals', tokens: [
      { symbol: 'x, abc, counter', type: 'IDENTIFIER' },
      { symbol: '1, 42, 1337', type: 'INT_LIT' }
    ]}
  ]

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/#projects')}
          className="mb-8 flex items-center gap-2 text-textSecondary hover:text-primary transition-colors font-mono text-sm"
        >
          <span>←</span> cd ..
        </motion.button>

        {/* Header - Terminal Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="bg-card border border-primary/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <div className="w-3 h-3 rounded-full bg-textMuted"></div>
              </div>
              <span className="text-textMuted text-sm font-mono">~/projects/eidos</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 font-mono">
              $ ./eidos
            </h1>
            <p className="text-textSecondary text-lg font-mono mb-6">
              {eidosData.overview}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-background border border-green-500/50 text-green-400 text-xs font-mono">
                [ACTIVE]
              </span>
              <span className="px-3 py-1 bg-background border border-primary/30 text-primary text-xs font-mono">
                Tools & Infrastructure
              </span>
              <span className="px-3 py-1 bg-background border border-primary/30 text-primary text-xs font-mono">
                Open Source
              </span>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/SomeRandomTV/Eidos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-background border border-primary/50 hover:border-primary text-primary transition-colors font-mono text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Overview, Problem, Motivation, Features */}
        <Section title="PROBLEM & MOTIVATION">
          <div className="luxury-card p-8">
            <h3 className="text-primary text-lg font-light mb-2">Problem</h3>
            <p className="text-textSecondary font-light mb-6">{eidosData.problem}</p>
            <h3 className="text-primary text-lg font-light mb-2">Motivation</h3>
            <p className="text-textSecondary font-light mb-6">{eidosData.motivation}</p>
            <h3 className="text-primary text-lg font-light mb-2">Key Features</h3>
            <ul className="space-y-2 text-textSecondary font-light">
              {eidosData.keyFeatures.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Challenges */}
        <Section title="CHALLENGES">
          <div className="luxury-card p-8">
            <ul className="space-y-3 text-textSecondary font-light">
              {eidosData.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-secondary">•</span>
                  <span><b>{c.challenge}</b> <span className="text-textMuted">{c.solution}</span></span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
        {/* Compilation Pipeline */}
        <Section title="COMPILATION PIPELINE">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <PipelineStage number="01" title="Source Code" status="complete" />
            <PipelineStage number="02" title="Lexer" status="complete" />
            <PipelineStage number="03" title="Parser" status="in-progress" />
            <PipelineStage number="04" title="Code Gen" status="planned" />
          </div>
          <div className="bg-card border border-border p-6 font-mono text-sm text-textSecondary">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary">→</span>
              <span>Source Code (.e files)</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary">→</span>
              <span>Lexical Analysis (Tokenization) ✓</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-secondary">→</span>
              <span>Syntax Analysis (AST Construction) [IN PROGRESS]</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-textMuted">→</span>
              <span className="text-textMuted">Code Generation [PLANNED]</span>
            </div>
          </div>
        </Section>

        {/* Overview */}
        <Section title="OVERVIEW">
          <p className="text-textSecondary leading-relaxed mb-4">
            Eidos (Greek for "Form" or "Essence") is a custom compiler implementation in C that explores the fundamental mechanics of how source code transforms into executable instructions. The project currently features a complete lexical analyzer that tokenizes Eidos language source files.
          </p>
          <p className="text-textSecondary leading-relaxed">
            The lexer implements a classification-based approach: scanning character streams, building lexemes, and classifying them into appropriate token types. This foundation enables the parser (currently under development) to construct Abstract Syntax Trees for semantic analysis and code generation.
          </p>
        </Section>

        {/* Lexer in Action */}
        <Section title="LEXER IN ACTION">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input */}
            <div>
              <h4 className="text-primary font-mono text-sm mb-3">INPUT (Eidos Source)</h4>
              <div className="bg-card border border-primary/30 p-4">
                <textarea
                  value={lexerInput}
                  onChange={(e) => setLexerInput(e.target.value)}
                  className="w-full h-40 bg-transparent text-secondary font-mono text-sm resize-none focus:outline-none focus:ring-1 focus:ring-primary/50"
                  spellCheck="false"
                  placeholder="Type Eidos code here..."
                />
              </div>
            </div>
            
            {/* Output */}
            <div>
              <h4 className="text-primary font-mono text-sm mb-3">OUTPUT (Token Stream)</h4>
              <div className="bg-card border border-primary/30 p-4 font-mono text-xs h-52 overflow-y-auto">
                <div className="flex gap-8 mb-2 text-textMuted border-b border-border pb-2 sticky top-0 bg-card">
                  <span className="w-24">Lexeme</span>
                  <span>Token</span>
                </div>
                {lexerOutput.length > 0 ? (
                  lexerOutput.map((item, i) => (
                    <div key={i} className="flex gap-8 text-textSecondary hover:text-primary transition-colors py-1">
                      <span className="w-24">{item.lexeme}</span>
                      <span className="text-secondary">{item.token}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-textMuted italic">No tokens (empty input)</div>
                )}
              </div>
            </div>
          </div>
        </Section>

        {/* Token Classification Table */}
        <Section title="TOKEN CLASSIFICATION">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tokenTable.map((category, i) => (
              <div key={i} className="bg-card border border-border p-6">
                <h4 className="text-primary font-mono text-sm mb-4">{category.category}</h4>
                <div className="space-y-2">
                  {category.tokens.map((token, j) => (
                    <div key={j} className="flex justify-between items-center font-mono text-xs">
                      <code className="text-secondary">{token.symbol}</code>
                      <span className="text-textMuted">{token.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* BNF Grammar */}
        <Section title="BNF GRAMMAR RULES">
          <div className="bg-card border border-primary/30">
            <div 
              className="p-4 flex items-center justify-between cursor-pointer hover:bg-primary/5 transition-colors"
              onClick={() => setExpandedGrammar(!expandedGrammar)}
            >
              <span className="text-primary font-mono text-sm">grammar.bnf</span>
              <span className="text-textMuted font-mono text-xs">
                {expandedGrammar ? '[-]' : '[+]'}
              </span>
            </div>
            {expandedGrammar && (
              <div className="border-t border-border p-6">
                <pre className="text-secondary font-mono text-xs leading-relaxed overflow-x-auto">
                  {bnfGrammar}
                </pre>
              </div>
            )}
          </div>
        </Section>

        {/* Language Features */}
        <Section title="SUPPORTED FEATURES">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Variable declarations (let)',
              'Assignment statements',
              'Arithmetic operations (+, -, *, /)',
              'Comparison operators (<, >, <=, >=, ==, !=)',
              'Increment/Decrement (++, --)',
              'Control flow (if/else)',
              'Loops (for, while)',
              'I/O operations (print, read)',
              'Nested expressions',
              'Multi-character tokens',
              'Line/column tracking',
              'Detailed error reporting'
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3 bg-card border border-border p-4 hover:border-primary/50 transition-colors">
                <span className="text-primary text-lg font-mono">✓</span>
                <span className="text-textSecondary text-sm font-mono">{feature}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Technical Implementation */}
        <Section title="TECHNICAL IMPLEMENTATION">
          <div className="space-y-4">
            <ImplementationDetail
              title="Lexer Architecture"
              description="Character-by-character scanner with classification-based tokenization. Uses peek/advance pattern for lookahead and builds lexemes dynamically before classification."
            />
            <ImplementationDetail
              title="Token Structure"
              description="Each token contains: type (enum), lexeme (string), line number, and column position for precise error reporting and debugging."
            />
            <ImplementationDetail
              title="Memory Management"
              description="Dynamic lexeme allocation with proper cleanup. Parser owns token memory after lexer hands off tokens, preventing leaks."
            />
            <ImplementationDetail
              title="Test Suite"
              description="Automated testing via shell scripts comparing lexer output against expected token streams. Includes 10+ test cases covering all language features."
            />
          </div>
        </Section>

        {/* Technologies */}
        <Section title="TECH STACK">
          <div className="flex flex-wrap gap-3">
            {['C Language', 'Formal Grammar Theory', 'Compiler Design', 'Make', 'Shell Scripting'].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-card border border-primary/30 text-textSecondary hover:border-primary transition-colors font-mono text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </Section>

        {/* Challenges */}
        <Section title="IMPLEMENTATION CHALLENGES">
          <div className="space-y-6">
            <Challenge
              title="Multi-character Token Recognition"
              solution="Implemented lookahead buffer to distinguish single-char operators (=, <, >) from two-char operators (==, <=, >=, ++, --, !=)"
            />
            <Challenge
              title="Memory Management in C"
              solution="Dynamic string allocation for lexemes with careful ownership transfer from lexer to parser, preventing memory leaks"
            />
            <Challenge
              title="Precise Error Reporting"
              solution="Line and column tracking throughout lexical analysis, providing exact location information for syntax errors"
            />
          </div>
        </Section>

        {/* Project Structure */}
        <Section title="PROJECT STRUCTURE">
          <div className="bg-card border border-border p-6 font-mono text-xs">
            <div className="space-y-1 text-textSecondary">
              <div className="text-primary">eidos/</div>
              <div className="ml-4">├── src/</div>
              <div className="ml-8">│   ├── lexer/</div>
              <div className="ml-12 text-secondary">│   │   ├── lexer.h</div>
              <div className="ml-12 text-secondary">│   │   └── lexer.c</div>
              <div className="ml-8">│   ├── parser/</div>
              <div className="ml-12 text-textMuted">│   │   ├── parser.h</div>
              <div className="ml-12 text-textMuted">│   │   ├── parser.c</div>
              <div className="ml-12 text-textMuted">│   │   └── ast.h</div>
              <div className="ml-8 text-secondary">│   └── main.c</div>
              <div className="ml-4">├── test_codes/</div>
              <div className="ml-4">├── test_codes_lexemes/</div>
              <div className="ml-4 text-secondary">├── test_lexer.sh</div>
              <div className="ml-4">├── Makefile</div>
              <div className="ml-4">└── README.md</div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}

// Component helpers
const Section = ({ title, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-16"
  >
    <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-8 font-mono">
      <span className="animated-gradient">[{title}]</span>
    </h2>
    {children}
  </motion.section>
)

const PipelineStage = ({ number, title, status }) => {
  const getStatusColor = () => {
    switch(status) {
      case 'complete': return 'border-primary text-primary'
      case 'in-progress': return 'border-secondary text-secondary'
      case 'planned': return 'border-textMuted text-textMuted'
      default: return 'border-border text-textMuted'
    }
  }

  return (
    <div className={`bg-card border ${getStatusColor()} p-4 text-center`}>
      <div className="text-xs font-mono mb-2">{number}</div>
      <div className="text-sm font-mono">{title}</div>
    </div>
  )
}

const ImplementationDetail = ({ title, description }) => (
  <div className="bg-card border border-border p-6">
    <h4 className="text-primary font-mono text-sm mb-2">{title}</h4>
    <p className="text-textSecondary text-sm leading-relaxed">{description}</p>
  </div>
)

const Challenge = ({ title, solution }) => (
  <div className="bg-card border border-border p-6">
    <div className="flex items-start gap-3 mb-3">
      <span className="text-secondary text-xl">⚠</span>
      <h4 className="text-secondary font-mono text-sm">{title}</h4>
    </div>
    <p className="text-textSecondary leading-relaxed">
      <span className="text-primary font-mono">→ </span>
      {solution}
    </p>
  </div>
)

export default EidosDetail
