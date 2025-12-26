'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface FormField {
  key: string;
  label: string;
  placeholder: string;
}

interface ReflectionFormProps {
  fields: FormField[];
  apiEndpoint?: string;
  submitLabel?: string;
}

export const ReflectionForm: React.FC<ReflectionFormProps> = ({
  fields,
  apiEndpoint = '/api/reflect',
  submitLabel = 'Reflect'
}) => {
  const [inputs, setInputs] = useState<Record<string, string>>(
    Object.fromEntries(fields.map(f => [f.key, '']))
  );
  const [reflection, setReflection] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (key: string, value: string) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  const hasInput = Object.values(inputs).some(v => v.trim() !== '');

  const handleSubmit = async () => {
    if (!hasInput) return;
    setIsLoading(true);
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs),
      });
      const data = await response.json();
      setReflection(data.reflection);
    } catch {
      setReflection("Thank you for writing this down. Just naming these things creates space.");
    }
    setIsLoading(false);
  };

  return (
    <div className="space-y-8">
      {fields.map(field => (
        <div key={field.key} className="space-y-2">
          <label className="block font-sans text-sm font-medium text-offline-black">
            {field.label}
          </label>
          <textarea
            value={inputs[field.key]}
            onChange={(e) => handleInputChange(field.key, e.target.value)}
            className="w-full bg-cream border-0 rounded-lg p-4 text-offline-black focus:ring-1 focus:ring-offline-gray/50 resize-none h-24 placeholder:text-offline-gray/40 transition-all"
            placeholder={field.placeholder}
          />
        </div>
      ))}

      <div className="pt-4 flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={isLoading || !hasInput}
          className="bg-offline-black text-white px-6 py-2 rounded-full font-sans text-sm hover:bg-offline-black/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : submitLabel}
        </button>
      </div>

      {reflection && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-6 p-6 bg-cream rounded-xl border border-offline-border/50"
        >
          <h4 className="font-serif text-lg text-offline-black mb-2">Reflection</h4>
          <p className="font-sans text-offline-gray leading-relaxed">{reflection}</p>
        </motion.div>
      )}
    </div>
  );
};
