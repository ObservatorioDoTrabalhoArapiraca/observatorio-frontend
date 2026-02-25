import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReactNode } from "react";

interface AgregacaoFilterProps {
  isAnual: boolean;
  ano: number | null;
  anosDisponiveis: number[];
  onAgregacaoChange: (isAnual: boolean) => void;
  onAnoChange: (ano: number) => void;
  topN?: ReactNode
}

export function AgregacaoFilter({
  isAnual,
  ano,
  anosDisponiveis,
  onAgregacaoChange,
  onAnoChange,
  topN
}: AgregacaoFilterProps) {
  return (
    <div className="flex flex-wrap gap-4 items-center p-4">
      {/* Checkbox para alternar agregação */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="agregacao-mensal"
          checked={!isAnual}
          onCheckedChange={(checked) => onAgregacaoChange(!checked)}
        />
        <Label 
          htmlFor="agregacao-mensal" 
          className="text-sm font-medium cursor-pointer"
        >
          Visualização mensal
        </Label>
      </div>

      {/* Seletor de ano - só aparece quando agregação é mensal */}
      {!isAnual && (
        <div className="flex items-center gap-2">
          <Label htmlFor="ano" className="text-sm whitespace-nowrap">
            Ano:
          </Label>
          <Select 
            value={ano?.toString() ?? ""} 
            onValueChange={(value) => onAnoChange(Number(value))}
          >
            <SelectTrigger id="ano" className="w-[120px]">
              <SelectValue placeholder="Selecione..." />
            </SelectTrigger>
            <SelectContent>
              {anosDisponiveis.map((anoItem) => (
                <SelectItem key={anoItem} value={anoItem.toString()}>
                  {anoItem}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Indicador visual da agregação atual */}
      <span className="text-xs text-muted-foreground">
        {isAnual 
          ? "Exibindo todos os anos" 
          : `Exibindo meses de ${ano}`
        }
      </span>
      <div>

      {topN && topN}
      </div>
    </div>
  );
}