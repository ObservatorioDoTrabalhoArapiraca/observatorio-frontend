import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface TableFiltersProps {
  ano: number;
  mes: number;
  isAnual: boolean;
  onAnoChange: (ano: number) => void;
  onMesChange: (mes: number) => void;
  onAgregacaoChange: (isAnual: boolean) => void;
}

export default function TableFilters({
  ano,
  mes,
  isAnual,
  onAnoChange,
  onMesChange,
  onAgregacaoChange,
}: TableFiltersProps) {
  // Gerar anos (últimos 6 anos)
  const anos = Array.from({ length: 7 }, (_, i) => new Date().getFullYear() - i);
  
  // Meses do ano
  const meses = [
    { value: 1, label: "Janeiro" },
    { value: 2, label: "Fevereiro" },
    { value: 3, label: "Março" },
    { value: 4, label: "Abril" },
    { value: 5, label: "Maio" },
    { value: 6, label: "Junho" },
    { value: 7, label: "Julho" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Setembro" },
    { value: 10, label: "Outubro" },
    { value: 11, label: "Novembro" },
    { value: 12, label: "Dezembro" },
  ];

  return (
    <Card className="mb-6 shadow-md bg-off-white/40 ">
      <CardHeader>
        <CardTitle>Filtros de Busca</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 items-end">
          {/* Select Ano */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="ano">Ano</Label>
            <Select 
              value={ano.toString()} 
              onValueChange={(value) => onAnoChange(Number(value))}
            >
              <SelectTrigger className="w-[180px]" id="ano">
                <SelectValue placeholder="Selecione o ano" />
              </SelectTrigger>
              <SelectContent>
                {anos.map((a) => (
                  <SelectItem key={a} value={a.toString()}>
                    {a}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Select Mês */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="mes">Mês</Label>
            <Select 
              value={mes.toString()} 
              onValueChange={(value) => onMesChange(Number(value))}
            >
              <SelectTrigger className="w-[180px]" id="mes">
                <SelectValue placeholder="Selecione o mês" />
              </SelectTrigger>
              <SelectContent>
                {meses.map((m) => (
                  <SelectItem key={m.value} value={m.value.toString()}>
                    {m.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Checkbox Agregação */}
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="agregacao" 
              checked={isAnual}
              onCheckedChange={(checked) => onAgregacaoChange(checked as boolean)}
            />
            <Label 
              htmlFor="agregacao" 
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Agregação Anual
            </Label>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mt-3">
          Agregação atual: <strong>{isAnual ? "Anual" : "Mensal"}</strong>
        </p>
      </CardContent>
    </Card>
  );
}