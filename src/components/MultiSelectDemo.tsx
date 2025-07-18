import { useState } from 'react'
import { MultiSelect, Option } from './ui/multi-select'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

const authorizationOptions: Option[] = [
  { label: "Exam", value: "exam" },
  { label: "Frame", value: "frame" },
  { label: "Lens", value: "lens" },
  { label: "Contact Lens", value: "contact_lens" },
  { label: "CL Lens Fit", value: "cl_lens_fit" },
  { label: "Medical", value: "medical" },
]

export function MultiSelectDemo() {
  const [selectedAuthorizations, setSelectedAuthorizations] = useState<string[]>([
    "exam", "frame", "lens", "contact_lens", "cl_lens_fit", "medical"
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">
            Multi-Select Component Demo
          </h1>
          <p className="text-gray-400">
            Replicating the authorization dropdown from the SpexFetch interface
          </p>
        </div>

        <Card className="cyberpunk-border bg-slate-900/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center">
              Authorization Selection
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                What do you want to authorize?
              </label>
              <MultiSelect
                options={authorizationOptions}
                selected={selectedAuthorizations}
                onChange={setSelectedAuthorizations}
                placeholder="Select authorization types..."
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-300">Selected Items:</h3>
              <div className="bg-slate-800/30 rounded-lg p-4 min-h-[60px]">
                {selectedAuthorizations.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {selectedAuthorizations.map((value) => {
                      const option = authorizationOptions.find(opt => opt.value === value)
                      return (
                        <span 
                          key={value}
                          className="px-3 py-1 bg-purple-600/20 text-purple-300 border border-purple-500/30 rounded-md text-sm"
                        >
                          {option?.label}
                        </span>
                      )
                    })}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">No items selected</p>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={() => setSelectedAuthorizations(authorizationOptions.map(opt => opt.value))}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Select All
              </Button>
              <Button 
                onClick={() => setSelectedAuthorizations([])}
                variant="outline"
                className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
              >
                Clear All
              </Button>
              <Button 
                onClick={() => setSelectedAuthorizations(["exam", "frame"])}
                variant="outline"
                className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
              >
                Basic Selection
              </Button>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-300 mb-2">Component Features:</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Multi-selection with checkboxes</li>
                <li>• Select All / Deselect All functionality</li>
                <li>• Search/filter capabilities</li>
                <li>• Individual item removal with X button</li>
                <li>• Dark theme with purple accents</li>
                <li>• Keyboard navigation support</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="cyberpunk-border bg-slate-900/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-purple-300">Usage Example</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-slate-800/50 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
{`import { MultiSelect, Option } from './ui/multi-select'

const options: Option[] = [
  { label: "Exam", value: "exam" },
  { label: "Frame", value: "frame" },
  { label: "Lens", value: "lens" },
]

const [selected, setSelected] = useState<string[]>([])

<MultiSelect
  options={options}
  selected={selected}
  onChange={setSelected}
  placeholder="Select items..."
/>`}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}