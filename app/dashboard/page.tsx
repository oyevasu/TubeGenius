import AIAssistant from "../components/AIAssistant"
import SEOAnalysis from "../components/SEOAnalysis"
import ContentScheduler from "../components/ContentScheduler"

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <AIAssistant />
      <SEOAnalysis />
      <ContentScheduler />
    </div>
  )
}

