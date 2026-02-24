import { ANOS_DISPONIVEIS } from "@/Utils/pariodosDisponiveis";
import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";



interface UseAgregacaoFilterOptions {
  defaultAno?: number;
}

interface UseAgregacaoFilterReturn {
  isAnual: boolean;
  ano: number | null;
  anosDisponiveis: number[];
  setIsAnual: (value: boolean) => void;
  setAno: (value: number | null) => void;
  toggleAgregacao: () => void;
  agregacao: "anual" | "mensal";
}

export function useAgregacaoFilter(
  options?: UseAgregacaoFilterOptions
): UseAgregacaoFilterReturn {
  const [searchParams, setSearchParams] = useSearchParams();

  const parseAnoFromUrl = (): number | null => {
    const anoParam = searchParams.get("ano");
    return anoParam ? Number(anoParam) : null;
  };

  const parseAgregacaoFromUrl = (): boolean => {
    return searchParams.get("agregacao") !== "mensal";
  };

  const [isAnual, setIsAnualState] = useState<boolean>(parseAgregacaoFromUrl());
  const [ano, setAnoState] = useState<number | null>(parseAnoFromUrl());

  const setIsAnual = useCallback((value: boolean) => {
    setIsAnualState(value);
    // Se mudar para mensal e não tiver ano, seleciona o mais recente
    if (!value && ano === null) {
      const defaultAno = options?.defaultAno ?? ANOS_DISPONIVEIS[ANOS_DISPONIVEIS.length - 1];
      setAnoState(defaultAno);
    }
  }, [ano, options?.defaultAno]);

  const setAno = useCallback((value: number | null) => {
    setAnoState(value);
  }, []);

  const toggleAgregacao = useCallback(() => {
    setIsAnual(!isAnual);
  }, [isAnual, setIsAnual]);

  // Sincronizar com URL
  useEffect(() => {
    const params: Record<string, string> = {
      agregacao: isAnual ? "anual" : "mensal",
    };
    if (!isAnual && ano !== null) {
      params.ano = ano.toString();
    }
    setSearchParams(params);
  }, [isAnual, ano, setSearchParams]);

  return {
    isAnual,
    ano,
    anosDisponiveis: ANOS_DISPONIVEIS,
    setIsAnual,
    setAno,
    toggleAgregacao,
    agregacao: isAnual ? "anual" : "mensal",
  };
}