import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MESES = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

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
  const renderContent = () => {
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

    return (
      <ChartContainer config={config} className="min-h-[300px] w-full">
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
              fill={`var(--color-${key})`}
              radius={4}
              name={config[key]?.label?.toString() ?? key}
            />
          ))}
        </BarChart>
      </ChartContainer>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{renderContent()}</CardContent>
    </Card>
  );
}