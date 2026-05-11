import { Trophy, Target, Globe, Briefcase, Zap, Gift, ShieldCheck } from 'lucide-react'
import type { FC } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

export const LevelUpPage: FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">SOV Assistant Dashboard</h1>
          <p className="text-muted-foreground">Self-healing ecosystem for autonomous work and finance.</p>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium mb-1 flex items-center justify-end gap-2">
             <ShieldCheck className="size-4 text-purple-500" />
             Level 12 Sovereign
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">2450 / 3000 EXP</span>
            <Progress value={81} className="w-32 h-2" />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-blue-500/20 bg-blue-500/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Target className="size-4 text-blue-500" />
              Daily Personal Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3 / 5</div>
            <p className="text-xs text-muted-foreground">AI Managed Tasks</p>
          </CardContent>
        </Card>
        <Card className="border-green-500/20 bg-green-500/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Globe className="size-4 text-green-500" />
              Network Care Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1 / 2</div>
            <p className="text-xs text-muted-foreground">SAM Orchestrated</p>
          </CardContent>
        </Card>
        <Card className="border-orange-500/20 bg-orange-500/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Zap className="size-4 text-orange-500" />
              Trading Bots
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2 Active</div>
            <p className="text-xs text-muted-foreground">Volatility Strategy Active</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="size-5 text-purple-500" />
              Sovereign Invites & Boosts
            </CardTitle>
            <CardDescription>Gift automated bots to friends to expand the network.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Generate Giftable Bot</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="size-5 text-blue-500" />
              SAM Mobile Bridge
            </CardTitle>
            <CardDescription>Daily mobile sync for work task continuity.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-sm italic">Status: Synchronized</div>
              <Button size="sm">Run Sync Protocol</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
