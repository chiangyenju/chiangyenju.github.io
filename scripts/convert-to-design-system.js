#!/usr/bin/env node

/**
 * Design System Conversion Script
 * 
 * This script helps convert existing Tailwind classes to design system classes
 * Usage: node scripts/convert-to-design-system.js <file-path>
 */

const fs = require('fs');
const path = require('path');

// Define conversion mappings
const CONVERSIONS = {
  // Background colors
  'bg-black': 'bg-ds-primary',
  'bg-neutral-900': 'bg-ds-primary',
  'bg-stone-900': 'bg-ds-secondary',
  'bg-stone-800': 'bg-ds-tertiary',
  
  // Text colors
  'text-white': 'text-ds-primary',
  'text-stone-100': 'text-ds-primary',
  'text-stone-200': 'text-ds-secondary',
  'text-stone-300': 'text-ds-tertiary',
  'text-stone-400': 'text-ds-quaternary',
  'text-stone-500': 'text-ds-quinary',
  
  // Complex patterns - need regex
  patterns: [
    {
      from: /text-white\/(\d+)/g,
      to: (match, opacity) => {
        const opacityNum = parseInt(opacity);
        if (opacityNum >= 90) return 'text-ds-primary';
        if (opacityNum >= 70) return 'text-ds-secondary';
        if (opacityNum >= 50) return 'text-ds-tertiary';
        if (opacityNum >= 30) return 'text-ds-quaternary';
        return 'text-ds-quinary';
      }
    },
    {
      from: /bg-white\/(\d+)/g,
      to: (match, opacity) => {
        const opacityNum = parseInt(opacity);
        if (opacityNum >= 15) return 'bg-ds-interactive';
        if (opacityNum >= 10) return 'interactive';
        return 'bg-ds-glass';
      }
    },
    {
      from: /border-white\/(\d+)/g,
      to: (match, opacity) => {
        const opacityNum = parseInt(opacity);
        if (opacityNum >= 30) return 'border-ds-strong';
        if (opacityNum >= 20) return 'border-ds-medium';
        return 'border-ds-subtle';
      }
    },
    {
      from: /bg-gradient-to-br from-white\/\[0\.0[0-9]+\] to-white\/\[0\.0[0-9]+\]/g,
      to: 'glass-card'
    },
    {
      from: /shadow-white\/\[0\.\d+\]/g,
      to: 'shadow-warm'
    },
    {
      from: /shadow-amber-500\/\[0\.\d+\]/g,
      to: 'shadow-warm'
    }
  ]
};

// Component pattern replacements
const COMPONENT_PATTERNS = [
  {
    from: /className="([^"]*bg-gradient-to-br from-stone-500\/\[0\.08\] to-stone-600\/\[0\.04\] backdrop-blur-xl rounded-2xl[^"]*border border-stone-500\/\[0\.15\][^"]*)"/g,
    to: 'className="glass-card project-card"',
    name: 'Glass Card Pattern'
  },
  {
    from: /className="([^"]*bg-stone-500\/12[^"]*hover:bg-stone-500\/20[^"]*)"/g,
    to: 'className="interactive btn-primary"',
    name: 'Interactive Button Pattern'
  },
  {
    from: /className="([^"]*w-1 h-1 bg-stone-400\/60 rounded-full[^"]*)"/g,
    to: 'className="dot-indicator"',
    name: 'Dot Indicator Pattern'
  }
];

function convertFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }

  console.log(`\n🔄 Converting ${filePath}...`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let changeCount = 0;
  
  // Apply simple string replacements
  Object.entries(CONVERSIONS).forEach(([from, to]) => {
    if (from === 'patterns') return; // Skip patterns array
    
    const before = content;
    content = content.replace(new RegExp(`\\b${from}\\b`, 'g'), to);
    if (content !== before) {
      const matches = (before.match(new RegExp(`\\b${from}\\b`, 'g')) || []).length;
      console.log(`  ✓ Replaced ${matches} instances of '${from}' → '${to}'`);
      changeCount += matches;
    }
  });
  
  // Apply regex patterns
  CONVERSIONS.patterns.forEach(pattern => {
    const before = content;
    if (typeof pattern.to === 'function') {
      content = content.replace(pattern.from, pattern.to);
    } else {
      content = content.replace(pattern.from, pattern.to);
    }
    if (content !== before) {
      const matches = (before.match(pattern.from) || []).length;
      console.log(`  ✓ Applied pattern replacement (${matches} matches)`);
      changeCount += matches;
    }
  });
  
  // Apply component pattern replacements
  COMPONENT_PATTERNS.forEach(pattern => {
    const before = content;
    content = content.replace(pattern.from, pattern.to);
    if (content !== before) {
      const matches = (before.match(pattern.from) || []).length;
      console.log(`  ✓ Applied ${pattern.name} (${matches} matches)`);
      changeCount += matches;
    }
  });
  
  // Write back to file
  if (changeCount > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Converted ${changeCount} items in ${filePath}`);
  } else {
    console.log(`ℹ️  No changes needed in ${filePath}`);
  }
}

function convertDirectory(dirPath, extensions = ['.tsx', '.jsx', '.ts', '.js']) {
  console.log(`\n🔍 Scanning directory: ${dirPath}`);
  
  const files = fs.readdirSync(dirPath, { withFileTypes: true });
  
  files.forEach(file => {
    const fullPath = path.join(dirPath, file.name);
    
    if (file.isDirectory() && !file.name.startsWith('.') && file.name !== 'node_modules') {
      convertDirectory(fullPath, extensions);
    } else if (file.isFile() && extensions.some(ext => file.name.endsWith(ext))) {
      convertFile(fullPath);
    }
  });
}

function generateReport() {
  console.log(`
📊 CONVERSION REPORT
====================

The following conversions were applied:

🎨 Background Colors:
  • bg-black → bg-ds-primary
  • bg-neutral-900 → bg-ds-primary  
  • bg-stone-900 → bg-ds-secondary

📝 Text Colors:
  • text-white → text-ds-primary
  • text-stone-{100-500} → text-ds-{primary-quinary}
  • text-white/{opacity} → intelligent mapping

🔲 Borders & Interactive:
  • border-white/{opacity} → border-ds-{subtle|medium|strong}
  • bg-white/{opacity} → bg-ds-interactive or interactive

🪟 Component Patterns:
  • Complex glass gradients → glass-card
  • Interactive buttons → btn-primary/secondary
  • Dot indicators → dot-indicator

💡 Next Steps:
  1. Test the application to ensure everything works
  2. Update any remaining custom styles manually
  3. Review components for additional optimization opportunities
  
🎯 Benefits:
  • Centralized theme management
  • Easy theme switching
  • Cleaner, more maintainable code
  • Better consistency across components
`);
}

// Main execution
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log(`
🎨 Design System Conversion Tool
================================

Usage:
  node scripts/convert-to-design-system.js <file-or-directory>
  
Examples:
  node scripts/convert-to-design-system.js app/components/Navigation.tsx
  node scripts/convert-to-design-system.js app/
  
This tool will:
  • Convert individual Tailwind classes to design system classes
  • Replace complex patterns with component classes
  • Maintain functionality while improving maintainability
    `);
    return;
  }
  
  const target = args[0];
  
  if (!fs.existsSync(target)) {
    console.error(`❌ Path not found: ${target}`);
    return;
  }
  
  const stats = fs.statSync(target);
  
  console.log('🚀 Starting Design System Conversion...');
  
  if (stats.isDirectory()) {
    convertDirectory(target);
  } else {
    convertFile(target);
  }
  
  generateReport();
  console.log('\n✨ Conversion complete!');
}

if (require.main === module) {
  main();
}

module.exports = { convertFile, convertDirectory, CONVERSIONS, COMPONENT_PATTERNS }; 