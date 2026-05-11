import { UserCircle, Shield, Briefcase, Layout } from 'lucide-react'
import type { FC } from 'react'
import { useNavigate } from 'react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const AGENCY_AGENTS = [
  {
    id: 'frontend-developer',
    name: 'Frontend Developer',
    description: 'Expert in modern web technologies and UI implementation.',
    icon: Layout,
    color: 'text-cyan-500',
  },
  {
    id: 'backend-architect',
    name: 'Backend Architect',
    description: 'Senior architect for scalable and secure server systems.',
    icon: Briefcase,
    color: 'text-blue-500',
  },
  {
    id: 'security-engineer',
    name: 'Security Engineer',
    description: 'Threat modeling and secure code review specialist.',
    icon: Shield,
    color: 'text-red-500',
  },
  {
    id: 'product-manager',
    name: 'Product Manager',
    description: 'Full lifecycle product ownership and strategy.',
    icon: UserCircle,
    color: 'text-purple-500',
  },
]

export const AgentsPage: FC = () => {
  const navigate = useNavigate()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">The Agency</h1>
        <p className="text-muted-foreground">Specialized AI agents ready to transform your workflow.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {AGENCY_AGENTS.map((agent) => {
          const Icon = agent.icon
          return (
            <Card key={agent.id} className="cursor-pointer hover:bg-accent/50 transition-colors" onClick={() => navigate(`/home/soul?template=${agent.id}`)}>
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <div className={`p-2 rounded-lg bg-background border ${agent.color}`}>
                  <Icon className="size-6" />
                </div>
                <div>
                  <CardTitle>{agent.name}</CardTitle>
                  <CardDescription>{agent.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Activate Specialist
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
