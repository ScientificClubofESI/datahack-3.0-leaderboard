import React from 'react';
import { Shield, Calendar, Clock, Plus } from 'lucide-react';


const commands = [
  {
    id: 1,
    name: '/call',
    icon: Shield,
    description: "Specify the desired call type (organizer or mentor).",
    options: [
      {
        name: 'type',
        description: 'Select between "Organizer" or "Mentor".'
      },
      {
        name: 'team',
        description: "Option to specify the concerned team."
      }
    ]
  },
  {
    id: 2,
    name: '/agenda',
    icon: Calendar,
    description: "Display the DataHack agenda.",
    options: [
      {
        name: 'day',
        description: "Specify a day number to display the corresponding agenda (optional)."
      }
    ]
  },
  {
    id: 3,
    name: '/timer',
    icon: Clock,
    description: 'Display the countdown for the DataHack.',
    options: []
  },
  {
    id: 4,
    name: '/create',
    icon: Plus,
    description: 'Create a category, channels, and a role for a specific team.',
    options: [
      {
        name: 'name',
        description: 'Name of the category, channels, and role.'
      },
      {
        name: 'member1, +4 more',
        description: "Add the team members."
      }
    ]
  }
];

const DataHackCommands = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32 px-20 pb-10">
      <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <h1 className="text-4xl mb:text-5xl font-virgo">DataHack Commands</h1>
          </div>
        <div className="bg-black/60 border border-[#E2BFFD]/20 rounded-xl p-10">
          


          <div className="space-y-9">
            {commands.map((command, index) => {
              const IconComponent = command.icon;
              
              return (
                <div 
                  key={command.id}
                  className={`pb-9 ${index !== commands.length - 1 ? 'border-b border-[#E2BFFD]/10' : ''}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <IconComponent className="w-5 h-5 text-[#E2BFFD]" />
                    <span className="text-lg font-medium text-[#E2BFFD] font-mono">
                      {command.name}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {command.description}
                  </p>

                  {command.options && command.options.length > 0 && (
                    <>
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                        <svg 
                          className="w-4 h-4 fill-gray-500" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                        </svg>
                        <span>Options:</span>
                      </div>

                      <div className="space-y-2 ml-6">
                        {command.options.map((option, optIndex) => (
                          <div key={optIndex} className="flex gap-3">
                            <span className="text-[#E2BFFD] text-xl leading-relaxed">•</span>
                            <div className="flex-1">
                              <span className="text-[#E2BFFD] font-mono text-sm mr-2">
                                {option.name}
                              </span>
                              <span className="text-gray-400 text-sm leading-relaxed">
                                {option.description}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataHackCommands;