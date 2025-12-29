import { CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

type TabsComponentProps = {
  categories: { label: string; value: string }[]
  tabsContent: { value: string; content: React.ReactNode }[]
  cardTitle: string
  navigateTo: string
  defaultTab: string
}
export default function TabsComponent({
  categories,
  tabsContent,
  navigateTo,
  cardTitle,
  defaultTab,
}: TabsComponentProps) {
  const { category } = useParams()

  const navigate = useNavigate()
  const currentCategory = category ?? defaultTab

  useEffect(() => {
    if (!category) {
      navigate(`/${navigateTo}/${currentCategory}`, { replace: true })
    }
  }, [category, navigate, navigateTo, currentCategory])

  const handleTabChange = (key: string) => {
    if (key !== category) {
      navigate(`/${navigateTo}/${key}`, { replace: true })
    }
  }

  return (
    <>
      <CardTitle className="w-full items-center p-4 flex justify-center text-lg">
        {cardTitle}
      </CardTitle>
      <Tabs
        defaultValue={defaultTab}
        value={category}
        onValueChange={handleTabChange}
      >
        <TabsList className=" pt-4 flex flex-row items-start md:items-center md:justify-center justify-start w-full h-fit overflow-x-auto pb-5">
          {categories.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className=" bg-off-white text-primary-blue p-3 rounded-t-md"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabsContent.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </>
  )
}
