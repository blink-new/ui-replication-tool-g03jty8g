import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Switch } from './components/ui/switch'
import { Badge } from './components/ui/badge'
import { Progress } from './components/ui/progress'
import { Separator } from './components/ui/separator'
import { 
  Play, 
  Square, 
  Upload, 
  Download, 
  Settings, 
  User, 
  Eye, 
  EyeOff, 
  Plus,
  Trash2,
  RefreshCw,
  Zap,
  Database,
  Shield
} from 'lucide-react'

interface UserAccount {
  id: string
  username: string
  password: string
  status: 'active' | 'inactive' | 'processing'
}

function App() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showPasswords, setShowPasswords] = useState(false)
  const [accounts, setAccounts] = useState<UserAccount[]>([
    { id: '1', username: 'user@example.com', password: 'password123', status: 'active' },
    { id: '2', username: 'demo@test.com', password: 'demo456', status: 'inactive' },
    { id: '3', username: 'admin@spex.com', password: 'admin789', status: 'processing' }
  ])
  
  const [config, setConfig] = useState({
    autoProcess: true,
    enableLogging: false,
    useProxy: true,
    batchMode: false,
    validateData: true
  })

  const handleStart = () => {
    setIsProcessing(true)
    setProgress(0)
    
    // Simulate processing
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsProcessing(false)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 500)
  }

  const handleStop = () => {
    setIsProcessing(false)
    setProgress(0)
  }

  const addAccount = () => {
    const newAccount: UserAccount = {
      id: Date.now().toString(),
      username: '',
      password: '',
      status: 'inactive'
    }
    setAccounts([...accounts, newAccount])
  }

  const removeAccount = (id: string) => {
    setAccounts(accounts.filter(acc => acc.id !== id))
  }

  const updateAccount = (id: string, field: keyof UserAccount, value: string) => {
    setAccounts(accounts.map(acc => 
      acc.id === id ? { ...acc, [field]: value } : acc
    ))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500'
      case 'processing': return 'bg-purple-500 status-indicator'
      case 'inactive': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Top Navigation */}
      <header className="border-b border-purple-500/20 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                SpexFetch
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-purple-300 hover:text-purple-100">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="ghost" size="sm" className="text-purple-300 hover:text-purple-100">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="cyberpunk-border bg-slate-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-300">
                  <Database className="w-5 h-5 mr-2" />
                  Configuration Panel
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="auto-process" className="text-sm font-medium">Auto Process</Label>
                    <Switch 
                      id="auto-process"
                      checked={config.autoProcess}
                      onCheckedChange={(checked) => setConfig({...config, autoProcess: checked})}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="enable-logging" className="text-sm font-medium">Enable Logging</Label>
                    <Switch 
                      id="enable-logging"
                      checked={config.enableLogging}
                      onCheckedChange={(checked) => setConfig({...config, enableLogging: checked})}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="use-proxy" className="text-sm font-medium">Use Proxy</Label>
                    <Switch 
                      id="use-proxy"
                      checked={config.useProxy}
                      onCheckedChange={(checked) => setConfig({...config, useProxy: checked})}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="batch-mode" className="text-sm font-medium">Batch Mode</Label>
                    <Switch 
                      id="batch-mode"
                      checked={config.batchMode}
                      onCheckedChange={(checked) => setConfig({...config, batchMode: checked})}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between md:col-span-2">
                    <Label htmlFor="validate-data" className="text-sm font-medium">Validate Data</Label>
                    <Switch 
                      id="validate-data"
                      checked={config.validateData}
                      onCheckedChange={(checked) => setConfig({...config, validateData: checked})}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* File Management */}
            <Card className="cyberpunk-border bg-slate-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-300">
                  <Upload className="w-5 h-5 mr-2" />
                  File Input/Output Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="input-file">Input File</Label>
                    <div className="flex space-x-2">
                      <Input 
                        id="input-file"
                        placeholder="Select input file..."
                        className="bg-slate-800/50 border-purple-500/30"
                      />
                      <Button size="sm" className="cyberpunk-button">
                        <Upload className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="output-file">Output Directory</Label>
                    <div className="flex space-x-2">
                      <Input 
                        id="output-file"
                        placeholder="Select output directory..."
                        className="bg-slate-800/50 border-purple-500/30"
                      />
                      <Button size="sm" className="cyberpunk-button">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                {isProcessing && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Processing...</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="cyberpunk-glow" />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card className="cyberpunk-border bg-slate-900/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex justify-center space-x-4">
                  <Button 
                    onClick={handleStart}
                    disabled={isProcessing}
                    className="cyberpunk-button px-8 py-3"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    {isProcessing ? 'Processing...' : 'Start Process'}
                  </Button>
                  
                  <Button 
                    onClick={handleStop}
                    disabled={!isProcessing}
                    variant="destructive"
                    className="px-8 py-3"
                  >
                    <Square className="w-5 h-5 mr-2" />
                    Stop
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="px-8 py-3 border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vision Payer Login Panel */}
          <div className="space-y-6">
            <Card className="cyberpunk-border bg-slate-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-purple-300">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Vision Payer Login
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setShowPasswords(!showPasswords)}
                    className="text-purple-400 hover:text-purple-300"
                  >
                    {showPasswords ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">User Accounts</span>
                  <Button 
                    onClick={addAccount}
                    size="sm" 
                    className="cyberpunk-button"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add
                  </Button>
                </div>
                
                <Separator className="bg-purple-500/20" />
                
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {accounts.map((account) => (
                    <div key={account.id} className="space-y-2 p-3 rounded-lg bg-slate-800/30 border border-purple-500/20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(account.status)}`} />
                          <Badge variant="outline" className="text-xs border-purple-500/30">
                            {account.status}
                          </Badge>
                        </div>
                        <Button 
                          onClick={() => removeAccount(account.id)}
                          variant="ghost" 
                          size="sm"
                          className="text-red-400 hover:text-red-300 h-6 w-6 p-0"
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                      
                      <Input
                        placeholder="Username/Email"
                        value={account.username}
                        onChange={(e) => updateAccount(account.id, 'username', e.target.value)}
                        className="bg-slate-700/50 border-purple-500/30 text-sm"
                      />
                      
                      <Input
                        type={showPasswords ? 'text' : 'password'}
                        placeholder="Password"
                        value={account.password}
                        onChange={(e) => updateAccount(account.id, 'password', e.target.value)}
                        className="bg-slate-700/50 border-purple-500/30 text-sm"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Status Panel */}
            <Card className="cyberpunk-border bg-slate-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-300">System Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Active Users:</span>
                    <span className="text-green-400">{accounts.filter(a => a.status === 'active').length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Processing:</span>
                    <span className="text-purple-400">{accounts.filter(a => a.status === 'processing').length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Accounts:</span>
                    <span className="text-blue-400">{accounts.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Success Rate:</span>
                    <span className="text-green-400">94.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8">
        <Button 
          size="lg"
          className="cyberpunk-button rounded-full w-14 h-14 floating-action shadow-2xl"
        >
          <Plus className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}

export default App