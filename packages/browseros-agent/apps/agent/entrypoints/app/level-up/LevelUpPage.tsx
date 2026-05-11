import { Trophy, Target, Globe, Briefcase, Zap, Gift } from 'lucide-react'
import type { FC } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

export const LevelUpPage: FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">Level Up</h1>
          <p className="text-muted-foreground">Gamified finance and network care ecosystem.</p>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium mb-1">Level 12 Explorer</div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">2450 / 3000 EXP</span>
            <Progress value={81} className="w-32 h-2" />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Target className="size-4 text-blue-500" />
              Daily Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3 / 5</div>
            <p className="text-xs text-muted-foreground">Set by your Personal AI</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Globe className="size-4 text-green-500" />
              Network Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1 / 2</div>
            <p className="text-xs text-muted-foreground">Set by SAM for Network Care</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Zap className="size-4 text-orange-500" />
              Trading Bots
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2 Active</div>
            <p className="text-xs text-muted-foreground">Level 10+ Bonus Enabled</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="size-5 text-yellow-500" />
            Level Up AI Bounty Board
          </CardTitle>
          <CardDescription>Escrowed tasks for work management and system care.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { title: 'Audit Smart Contract: Vault V2', reward: '500 SOV', type: 'Security' },
              { title: 'Refine NLP Model for Greek', reward: '250 SOV', type: 'ML' },
              { title: 'Update Network Documentation', reward: '100 SOV', type: 'Docs' },
            ].map((bounty, i) => (
              <div key={i} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                <div>
                  <div className="font-medium">{bounty.title}</div>
                  <div className="text-xs text-muted-foreground">{bounty.type}</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-green-600">{bounty.reward}</span>
                  <Button size="sm">Accept</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="size-5 text-purple-500" />
              Gift Boosts
            </CardTitle>
            <CardDescription>Invite friends and give them a head start.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Generate Invite & Boost</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="size-5 text-blue-500" />
              SAM Mobile Sync
            </CardTitle>
            <CardDescription>Connect mobile to sync work tasks.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-sm">Last Sync: 2 hours ago</div>
              <Button size="sm">Sync Now</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
