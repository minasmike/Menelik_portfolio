import React from 'react';
import { Book } from 'lucide-react';
import { readingList } from '../../lib/data';

export const KnowledgeGrowth = () => {
  return (
    <div className="space-y-6">
      <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
        <Book size={16} className="text-cyan-400" />
        Knowledge & Growth
      </h4>
      <ul className="space-y-4">
        {readingList.map((item, i) => (
          <li key={i} className="group cursor-default">
            <p className="text-zinc-400 text-sm font-bold group-hover:text-white transition-colors">
              {item.title}
            </p>
            <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest group-hover:text-cyan-400 transition-colors">
              {item.author}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};