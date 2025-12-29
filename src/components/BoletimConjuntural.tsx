import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PdfFile } from "@/core/services/pdfService"
import { monthOrder } from "@/Utils/capitalizeFirstLettrer"

export default function BoletimConjuntural({
  filtered,
  sortedYears,
  grouped,
}: {
  filtered: PdfFile[]
  sortedYears: string[]
  grouped: Record<string, Record<string, PdfFile[]>>
}) {
  return (
    <div className="md:w-3/4 p-4 md:p-0 mx-auto">
      <h2 className="my-4">Documentos Disponíveis</h2>

      {filtered.length === 0 && <p>Nenhum PDF disponível.</p>}

      {sortedYears.map((year) => (
        <div key={year} className="mb-2">
          <h3 className=" text-primary-blue mb-4 font-bold">{year}</h3>
          {monthOrder
            .filter((month) => grouped[year][month])
            .map((month) => (
              <Card key={month} className="mb-4 p-4 bg-off-white shadow-md">
                <h4 className=" text-primary-blue mb-2">{month}</h4>
                <ul className="space-y-4">
                  {grouped[year][month].map((pdf) => (
                    <li key={pdf.url}>
                      <Card className="p-4 rounded-md shadow-md ">
                        <a
                          href={pdf.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-wrap cursor-pointer items-center justify-between space-x-4 hover:text-primary-blue"
                        >
                          <div>
                          <span>📄</span>
                          <span>{pdf.name}</span>
                          </div>
                          <Button className="bg-secondary-blue text-white px-2 py-1 rounded">
                            Abrir
                          </Button>
                        </a>
                      </Card>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
        </div>
      ))}
    </div>
  )
}
