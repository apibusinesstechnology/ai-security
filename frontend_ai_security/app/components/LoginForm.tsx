'use client';
import { useState } from 'react';
import './LoginForm.css';

type LoginFormProps = {
  onSubmit: (data: { email: string; password: string }) => void;
  loading?: boolean;
};

export default function SecureLoginForm({ onSubmit, loading }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Tanpri ranpli tout chan yo.');
      return;
    }

    // Validation senp email
    if (!email.includes('@')) {
      setError('Email la pa valab.');
      return;
    }

    setError(null);
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="Form">
      <h2>Connexion sécurisée</h2>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <div className="boite">
        <label className="label">Adresse email</label>
        <input
          type="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
      </div>

      <div className="boite">
        <label className="label">Mot de passe</label>
        <input
          type="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
      </div>

      <button type="submit" disabled={loading} id="button">
        {loading ? 'Connexion en cours...' : 'Se connecter'}
      </button>
    </form>
  );
}
