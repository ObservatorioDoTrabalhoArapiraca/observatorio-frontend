import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MESES } from "@/Utils/periodosDisponiveis";
import { Expand } from "lucide-react";



export interface ChartDataItem {
  periodo: string;
  mes: number;
  ano: number;
  [key: string]: string | number; // Permite propriedades dinâmicas (feminino, masculino, etc.)
}

interface BarChartCardProps {
  title: string;
  description?: string;
  data: ChartDataItem[];
  config: ChartConfig;
  isAnual: boolean;
  loading?: boolean;
  error?: string | null;
  emptyMessage?: string;
  dataKeys: string[]; // Ex: ["feminino", "masculino"] ou ["admissoes", "demissoes"]
}

function formatXAxisTick(value: string, isAnual: boolean): string {
  if (!isAnual && value.includes("-")) {
    const [, mes] = value.split("-");
    return MESES[Number(mes) - 1];
  }
  return value;
}

function formatTooltipLabel(value: string | number, isAnual: boolean): string {
  if (!isAnual && typeof value === "string" && value.includes("-")) {
    const [ano, mes] = value.split("-");
    return `${MESES[Number(mes) - 1]}/${ano}`;
  }
  return `Ano: ${value}`;
}

function formatYAxisTick(value: number): string {
  return value >= 1000 ? `${(value / 1000).toFixed(0)}k` : String(value);
}

interface ChartContentProps {
  data: ChartDataItem[];
  config: ChartConfig;
  isAnual: boolean;
  dataKeys: string[];
  height?: number;
}

function ChartContent({ data, config, isAnual, dataKeys, height = 300 }: ChartContentProps) {
  return (
    <ChartContainer config={config} className={`w-full`} style={{ height }}>
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="periodo"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => formatXAxisTick(value, isAnual)}
        />
        <YAxis tickFormatter={formatYAxisTick} />
        <Tooltip
          labelFormatter={(value) => formatTooltipLabel(value, isAnual)}
        />
        <Legend />
        {dataKeys.map((key) => (
          <Bar
            key={key}
            dataKey={key}
            fill={config[key]?.color ?? "#6b7280"}
            radius={4}
            name={config[key]?.label?.toString() ?? key}
          />
        ))}
      </BarChart>
    </ChartContainer>
  );
}

export function BarChartCard({
  title,
  description,
  data,
  config,
  isAnual,
  loading = false,
  error = null,
  emptyMessage = "Nenhum dado encontrado",
  dataKeys,
}: BarChartCardProps) {

  const renderStatus = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center min-h-[300px]">
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex items-center justify-center min-h-[300px] text-destructive">
          <p>{error}</p>
        </div>
      );
    }

    if (data.length === 0) {
      return (
        <div className="flex items-center justify-center min-h-[300px] text-muted-foreground">
          <p>{emptyMessage}</p>
        </div>
      );
    }

    return null;
  };

  const statusContent = renderStatus();

  return (
    <Dialog>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </div>

          {/* Botão para expandir - só aparece quando há dados */}
          {!loading && !error && data.length > 0 && (
            <DialogTrigger asChild>
              <button
                className="p-2 rounded-md hover:bg-muted transition-colors"
                title="Expandir gráfico"
              >
                <Expand className="h-5 w-5 text-muted-foreground" />
              </button>
            </DialogTrigger>
          )}
        </CardHeader>

        <CardContent>
          {statusContent ?? (
            <ChartContent
              data={data}
              config={config}
              isAnual={isAnual}
              dataKeys={dataKeys}
              height={300}
            />
          )}
        </CardContent>
      </Card>

      {/* Dialog com gráfico ampliado */}
      <DialogContent className="max-w-[90vw] max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="p-4">
          <ChartContent
            data={data}
            config={config}
            isAnual={isAnual}
            dataKeys={dataKeys}
            height={500}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}