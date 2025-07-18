import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Badge } from './components/ui/badge'
import { Separator } from './components/ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { 
  Search, 
  Calendar,
  User,
  FileText,
  Copy,
  Printer,
  RotateCcw,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
  Eye,
  Package,
  Coins,
  Clock,
  CheckCircle,
  XCircle,
  Minus
} from 'lucide-react'

function App() {
  const [searchData, setSearchData] = useState({
    dateOfService: '7/17/2025',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    memberIdLastSSN: '',
    visionPlan: 'All',
    authorization: 'Exam - Frame - Lens - Contact Lens - CL Lens Fit - Medical',
    appointmentType: 'None'
  })

  const patientData = {
    planName: 'VSP Choice Plan',
    patientName: 'LIEZL CHICLANA',
    dateOfBirth: '08/08/1983',
    nameSearched: 'LIEZL CHICLANA',
    nameDiscovered: 'LIEZL CHICLANA',
    authorization: '4894262'
  }

  const eligibilityData = [
    { service: 'Exam', eligibility: 'Yes', productService: 'Copay', price: '$0' },
    { service: 'Frame', eligibility: 'Yes', productService: 'Frame Allowance', price: '$175.00' },
    { service: 'Lens', eligibility: 'Yes', productService: '--', price: '--' },
    { service: 'Contact Lens', eligibility: 'Yes', productService: 'Contact Lens Allowance', price: '$150.00' },
    { service: 'Contact Lens Fitting', eligibility: 'Yes', productService: 'Contact Exam Service', price: '--' },
    { service: 'Medical', eligibility: '--', productService: 'Medical Copay', price: '--' }
  ]

  const visionPlans = ['All', 'VSP', 'VERSANT', 'EYEMED', 'SPECTERA', 'MARCH', 'NVA']

  const getEligibilityIcon = (eligibility: string) => {
    if (eligibility === 'Yes') return <CheckCircle className="w-4 h-4 text-green-400" />
    if (eligibility === '--') return <Minus className="w-4 h-4 text-gray-400" />
    return <XCircle className="w-4 h-4 text-red-400" />
  }

  const getEligibilityBadge = (eligibility: string) => {
    if (eligibility === 'Yes') return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Yes</Badge>
    if (eligibility === '--') return <Badge variant="outline" className="border-gray-500/30 text-gray-400">--</Badge>
    return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">No</Badge>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Top Navigation */}
      <header className="border-b border-purple-500/20 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  SPEXFETCH
                </h1>
              </div>
              
              {/* Navigation Tabs */}
              <nav className="flex items-center space-x-6">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <Settings className="w-4 h-4 mr-2" />
                  Configuration
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6">
                  <Search className="w-4 h-4 mr-2" />
                  Single Search
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <FileText className="w-4 h-4 mr-2" />
                  Results
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <Package className="w-4 h-4 mr-2" />
                  Batch Manager
                </Button>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-orange-500/20 px-3 py-1 rounded-full">
                <Coins className="w-4 h-4 text-orange-400" />
                <span className="text-orange-400 font-medium">41545 Units</span>
              </div>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Clock className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <HelpCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-6">
        {/* Search Form */}
        <Card className="cyberpunk-border bg-slate-900/50 backdrop-blur-sm mb-6">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              {/* Date of Service */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300">Date of Service</Label>
                <div className="relative">
                  <Input 
                    value={searchData.dateOfService}
                    onChange={(e) => setSearchData({...searchData, dateOfService: e.target.value})}
                    className="bg-slate-800/50 border-purple-500/30 pr-10"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* First Name */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300">First Name</Label>
                <div className="relative">
                  <Input 
                    value={searchData.firstName}
                    onChange={(e) => setSearchData({...searchData, firstName: e.target.value})}
                    className="bg-slate-800/50 border-purple-500/30 pr-10"
                  />
                  <User className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300">Last Name</Label>
                <div className="relative">
                  <Input 
                    value={searchData.lastName}
                    onChange={(e) => setSearchData({...searchData, lastName: e.target.value})}
                    className="bg-slate-800/50 border-purple-500/30 pr-10"
                  />
                  <User className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Date of Birth */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300">Date of Birth</Label>
                <div className="relative">
                  <Input 
                    placeholder="//"
                    value={searchData.dateOfBirth}
                    onChange={(e) => setSearchData({...searchData, dateOfBirth: e.target.value})}
                    className="bg-slate-800/50 border-purple-500/30 pr-10"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Member ID/Last 4 SSN */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300">Member ID/Last 4 SSN</Label>
                <div className="relative">
                  <Input 
                    value={searchData.memberIdLastSSN}
                    onChange={(e) => setSearchData({...searchData, memberIdLastSSN: e.target.value})}
                    className="bg-slate-800/50 border-purple-500/30 pr-10"
                  />
                  <FileText className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Vision Plan */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300">What vision plan do you want to Search?</Label>
                <div className="flex flex-wrap gap-2">
                  {visionPlans.map((plan) => (
                    <Button
                      key={plan}
                      variant={searchData.visionPlan === plan ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSearchData({...searchData, visionPlan: plan})}
                      className={searchData.visionPlan === plan 
                        ? "bg-purple-600 hover:bg-purple-700" 
                        : "border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
                      }
                    >
                      {plan}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Authorization */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300">What do want to authorize?</Label>
                <Select value={searchData.authorization} onValueChange={(value) => setSearchData({...searchData, authorization: value})}>
                  <SelectTrigger className="bg-slate-800/50 border-purple-500/30">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-purple-500/30">
                    <SelectItem value="Exam - Frame - Lens - Contact Lens - CL Lens Fit - Medical">
                      Exam - Frame - Lens - Contact Lens - CL Lens Fit - Medical
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Appointment Type */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-300">Appointment Type?</Label>
                <Select value={searchData.appointmentType} onValueChange={(value) => setSearchData({...searchData, appointmentType: value})}>
                  <SelectTrigger className="bg-slate-800/50 border-purple-500/30">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-purple-500/30">
                    <SelectItem value="None">None</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                Clear Filter
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 px-8">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Patient Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* VSP Vision Card */}
            <Card className="cyberpunk-border bg-slate-900/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">
                    vsp VISION
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-medium">Plan Name: {patientData.planName}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-purple-400" />
                    <span className="text-lg font-bold">{patientData.patientName}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">{patientData.dateOfBirth}</span>
                  </div>
                </div>

                <div className="flex space-x-2 mt-4">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 flex-1">
                    <FileText className="w-4 h-4 mr-2" />
                    View PDF
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 flex-1">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Active
                  </Button>
                </div>

                <Separator className="bg-purple-500/20 my-4" />

                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Package className="w-4 h-4 text-orange-400" />
                    <span className="text-gray-400">Name Searched:</span>
                  </div>
                  <div className="text-gray-300 ml-6">Name Discovered: {patientData.nameDiscovered}</div>
                  
                  <div className="flex items-center space-x-2 mt-3">
                    <FileText className="w-4 h-4 text-orange-400" />
                    <span className="text-gray-400">Authorization: {patientData.authorization}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <Button variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 flex-1">
                <Copy className="w-4 h-4 mr-2" />
                Copy for EHR Notes
              </Button>
              <Button variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 flex-1">
                <Printer className="w-4 h-4 mr-2" />
                Print Plans
              </Button>
            </div>
          </div>

          {/* Eligibility Table */}
          <div className="lg:col-span-2">
            <Card className="cyberpunk-border bg-slate-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-300 flex items-center justify-between">
                  <span>Eligibility & Benefits</span>
                  <RotateCcw className="w-5 h-5 text-purple-400" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-purple-500/20">
                        <th className="text-left py-3 px-4 text-sm font-medium text-purple-300">Product/Service</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-purple-300">Eligibility</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-purple-300">Product/Service</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-purple-300">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {eligibilityData.map((item, index) => (
                        <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-800/30">
                          <td className="py-3 px-4 text-sm">{item.service}</td>
                          <td className="py-3 px-4">
                            {getEligibilityBadge(item.eligibility)}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-300">{item.productService}</td>
                          <td className="py-3 px-4 text-sm font-medium text-purple-400">{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="fixed bottom-6 right-6 flex space-x-3">
          <Button className="bg-slate-700 hover:bg-slate-600 text-white">
            <ChevronDown className="w-4 h-4 mr-2" />
            Float
          </Button>
          <Button variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
            View User Guides
          </Button>
          <Button variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
            Log Support Ticket
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App