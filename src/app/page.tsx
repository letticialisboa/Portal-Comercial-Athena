"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import TypeEffect from "@/components/TypeEffect";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  function entrar(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !senha) {
      setErro("Informe e-mail e senha para continuar.");
      return;
    }
    setErro("");
    setCarregando(true);
    setTimeout(() => router.push("/dashboard"), 350);
  }

  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      {/* Lado laranja */}
      <div className="relative flex w-full flex-col justify-center overflow-hidden bg-gradient-to-br from-[var(--color-athena)] via-[var(--color-athena)] to-[var(--color-athena-dark)] px-10 py-16 md:w-1/2 md:px-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-black/10 blur-3xl" />

        <p className="mb-3 animate-fade-in-up text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
          Portal Comercial
        </p>
        <h1 className="min-h-[5.5rem] text-3xl font-bold leading-tight text-white md:text-[2.6rem]">
          <TypeEffect text="Account Planning Athena Security" speedMs={40} />
        </h1>
        <p className="mt-5 max-w-md animate-fade-in-up text-sm leading-relaxed text-white/90 [animation-delay:200ms] md:text-base">
          Acompanhe o ciclo de vida dos seus clientes, fique alerta com os
          vencimentos de contratos e mais.
        </p>
      </div>

      {/* Lado branco */}
      <div className="flex w-full items-center justify-center bg-white px-8 py-16 md:w-1/2">
        <form onSubmit={entrar} className="w-full max-w-sm animate-fade-in-up [animation-delay:120ms]">
          <h2 className="mb-1 text-xl font-semibold tracking-tight text-[var(--color-ink)]">
            Acessar o portal
          </h2>
          <p className="mb-8 text-sm text-zinc-500">
            Use suas credenciais corporativas Athena Security.
          </p>

          <label className="mb-1.5 block text-sm font-medium text-zinc-700">
            E-mail corporativo
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nome@athenasecurity.com.br"
            className="mb-4 w-full rounded-xl border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-800 outline-none transition-all duration-200 placeholder:text-zinc-400 focus:border-[var(--color-athena)] focus:ring-4 focus:ring-[var(--color-athena)]/10"
          />

          <label className="mb-1.5 block text-sm font-medium text-zinc-700">Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="••••••••"
            className="mb-2 w-full rounded-xl border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-800 outline-none transition-all duration-200 placeholder:text-zinc-400 focus:border-[var(--color-athena)] focus:ring-4 focus:ring-[var(--color-athena)]/10"
          />

          {erro && <p className="mb-2 animate-fade-in text-sm text-red-600">{erro}</p>}

          <button
            type="submit"
            disabled={carregando}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-athena)] py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[var(--color-athena-dark)] hover:shadow-lg hover:shadow-[var(--color-athena)]/25 active:scale-[0.98] disabled:opacity-70"
          >
            {carregando ? (
              <>
                <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                Entrando...
              </>
            ) : (
              "Entrar"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
