import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  Target,
  Zap,
  FileText,
  Sprout,
  Heart,
  DollarSign,
  Database,
  Wheat,
  MapPin,
  BookOpen,
  Archive,
  Thermometer,
  Activity,
  ChevronDown
} from 'lucide-react';

const BeoNexusArchitecture = () => {
  const [pulsingApis, setPulsingApis] = useState([]);
  const [activeAgents, setActiveAgents] = useState([]);

  // Simulate API calls pulsing
  useEffect(() => {
    const interval = setInterval(() => {
      const randomApis = [];
      const count = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < count; i++) {
        randomApis.push(Math.floor(Math.random() * 6));
      }
      setPulsingApis(randomApis);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Simulate agent activity
  useEffect(() => {
    const interval = setInterval(() => {
      const agents = [];
      const count = Math.floor(Math.random() * 2) + 1;
      for (let i = 0; i < count; i++) {
        agents.push(Math.floor(Math.random() * 4));
      }
      setActiveAgents(agents);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const dataSources = [
    { id: 0, name: 'Veterinary DB', icon: Database },
    { id: 1, name: 'Farm Records', icon: Wheat },
    { id: 2, name: 'Regional Data', icon: MapPin },
    { id: 3, name: 'Scientific DB', icon: BookOpen },
    { id: 4, name: 'Fidelak DB', icon: Archive },
    { id: 5, name: 'IoT Sensors', icon: Thermometer },
  ];

  const specialistAgents = [
    { id: 0, name: 'Mastitis Agent', icon: Activity, color: '#e74c3c' },
    { id: 1, name: 'Nutrition Agent', icon: Sprout, color: '#f39c12' },
    { id: 2, name: 'Reproduction Agent', icon: Heart, color: '#e91e63' },
    { id: 3, name: 'Economics Agent', icon: DollarSign, color: '#27ae60' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0f1f1a',
      fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
      padding: '60px 40px',
      color: '#e0f0e8'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '80px',
        maxWidth: '800px',
        margin: '0 auto 80px'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '600',
          margin: '0 0 12px 0',
          color: '#7dcea0',
          letterSpacing: '-0.5px'
        }}>
          BeoNexus AI Architecture
        </h1>
        <p style={{
          color: '#6aaa8a',
          margin: 0,
          fontSize: '1rem',
          fontWeight: '400'
        }}>
          Multi-Agent System for Animal Health Management
        </p>
      </div>

      {/* Vertical Flow Container */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
      }}>

        {/* PHASE 1: User Input */}
        <div>
          <div style={{
            background: '#1a2e28',
            borderRadius: '16px',
            padding: '32px',
            border: '1px solid #2a4a3a'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '20px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: '#2a5a4a',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <MessageSquare size={24} color="#7dcea0" strokeWidth={2} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#7dcea0',
                  marginBottom: '8px',
                  fontWeight: '600',
                  letterSpacing: '0.5px'
                }}>
                  PHASE 1 — INPUT
                </div>
                <h3 style={{
                  margin: '0 0 16px 0',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#e0f0e8'
                }}>
                  User Question
                </h3>
                <div style={{
                  background: '#0f1f1a',
                  borderRadius: '12px',
                  padding: '16px',
                  border: '1px solid #2a4a3a'
                }}>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#a8e6cf',
                    margin: 0,
                    lineHeight: '1.6',
                    fontStyle: 'italic'
                  }}>
                    "My cow has high cell count. Should I use teat sealant or antibiotics for dry-off?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow Down */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ChevronDown size={32} color="#5a9a7a" strokeWidth={2} />
        </div>

        {/* PHASE 2: Orchestrator */}
        <div>
          <div style={{
            background: '#1a3a2e',
            borderRadius: '16px',
            padding: '32px',
            border: '1px solid #3a6a5a'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '20px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: '#4a9a8a',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Target size={24} color="#0f1f1a" strokeWidth={2.5} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#7dcea0',
                  marginBottom: '8px',
                  fontWeight: '600',
                  letterSpacing: '0.5px'
                }}>
                  PHASE 2 — ORCHESTRATION
                </div>
                <h3 style={{
                  margin: '0 0 8px 0',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#e0f0e8'
                }}>
                  Master Agent
                </h3>
                <p style={{
                  margin: '0',
                  fontSize: '0.9rem',
                  color: '#8dcaa8',
                  lineHeight: '1.5'
                }}>
                  Analyzes the question and dispatches to specialist agents
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow Down */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ChevronDown size={32} color="#5a9a7a" strokeWidth={2} />
        </div>

        {/* Specialist Agents */}
        <div>
          <div style={{
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            <h4 style={{
              fontSize: '0.85rem',
              color: '#7dcea0',
              margin: 0,
              fontWeight: '600',
              letterSpacing: '0.5px'
            }}>
              SPECIALIST AGENTS
            </h4>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            {specialistAgents.map((agent) => {
              const isActive = activeAgents.includes(agent.id);
              const AgentIcon = agent.icon;

              return (
                <div
                  key={agent.id}
                  style={{
                    background: '#1a2e28',
                    borderRadius: '12px',
                    padding: '20px',
                    border: `1px solid ${isActive ? agent.color : '#2a4a3a'}`,
                    transition: 'all 0.3s ease',
                    opacity: isActive ? 1 : 0.7
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      background: isActive ? agent.color : '#2a4a3a',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}>
                      <AgentIcon
                        size={18}
                        color={isActive ? '#ffffff' : '#6a9a8a'}
                        strokeWidth={2}
                      />
                    </div>
                    <div>
                      <div style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#e0f0e8',
                        marginBottom: '2px'
                      }}>
                        {agent.name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Data Sources */}
        <div>
          <div style={{
            background: '#0f1a17',
            borderRadius: '12px',
            padding: '24px',
            border: '1px dashed #2a4a3a'
          }}>
            <div style={{
              fontSize: '0.75rem',
              color: '#6a9a8a',
              marginBottom: '16px',
              fontWeight: '600',
              letterSpacing: '0.5px',
              textAlign: 'center'
            }}>
              DATA SOURCES
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '12px'
            }}>
              {dataSources.map((source) => {
                const isPulsing = pulsingApis.includes(source.id);
                const SourceIcon = source.icon;

                return (
                  <div
                    key={source.id}
                    style={{
                      background: isPulsing ? '#1a3328' : '#0f1f1a',
                      borderRadius: '8px',
                      padding: '12px',
                      border: `1px solid ${isPulsing ? '#4a7a6a' : '#1a2a24'}`,
                      transition: 'all 0.3s ease',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <SourceIcon
                        size={16}
                        color={isPulsing ? '#7dcea0' : '#5a7a6a'}
                        strokeWidth={2}
                      />
                      <div style={{
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        color: isPulsing ? '#7dcea0' : '#6a9a8a'
                      }}>
                        {source.name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Arrow Down */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ChevronDown size={32} color="#5a9a7a" strokeWidth={2} />
        </div>

        {/* PHASE 3: Synthesis & Reasoning */}
        <div>
          <div style={{
            background: '#1a3a2e',
            borderRadius: '16px',
            padding: '32px',
            border: '1px solid #3a6a5a'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: '#5aaa9a',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Zap size={24} color="#0f1f1a" strokeWidth={2.5} />
              </div>
              <div>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#7dcea0',
                  marginBottom: '4px',
                  fontWeight: '600',
                  letterSpacing: '0.5px'
                }}>
                  PHASE 3 — SYNTHESIS & REASONING
                </div>
                <h3 style={{
                  margin: 0,
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#e0f0e8'
                }}>
                  Agent Contributions
                </h3>
              </div>
            </div>

            {/* Agent Reasoning Cards */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginBottom: '24px'
            }}>
              {/* Mastitis Agent Contribution */}
              <div style={{
                background: '#0f1f1a',
                borderRadius: '12px',
                padding: '16px',
                border: '1px solid #e74c3c40'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '8px'
                }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    background: '#e74c3c',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Activity size={16} color="#ffffff" strokeWidth={2} />
                  </div>
                  <span style={{
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    color: '#e0f0e8'
                  }}>
                    Mastitis Agent
                  </span>
                </div>
                <p style={{
                  margin: 0,
                  fontSize: '0.85rem',
                  color: '#a8e6cf',
                  lineHeight: '1.5'
                }}>
                  Cell count of 280k is elevated but below clinical mastitis threshold (400k). No infection history detected. Immune system can handle without antibiotics.
                </p>
              </div>

              {/* Economics Agent Contribution */}
              <div style={{
                background: '#0f1f1a',
                borderRadius: '12px',
                padding: '16px',
                border: '1px solid #27ae6040'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '8px'
                }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    background: '#27ae60',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <DollarSign size={16} color="#ffffff" strokeWidth={2} />
                  </div>
                  <span style={{
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    color: '#e0f0e8'
                  }}>
                    Economics Agent
                  </span>
                </div>
                <p style={{
                  margin: 0,
                  fontSize: '0.85rem',
                  color: '#a8e6cf',
                  lineHeight: '1.5'
                }}>
                  Teat sealant costs €8/cow vs antibiotic DCT €25/cow. Non-AB approach avoids withdrawal periods and supports premium milk pricing.
                </p>
              </div>

              {/* Nutrition Agent Contribution */}
              <div style={{
                background: '#0f1f1a',
                borderRadius: '12px',
                padding: '16px',
                border: '1px solid #f39c1240'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '8px'
                }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    background: '#f39c12',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Sprout size={16} color="#ffffff" strokeWidth={2} />
                  </div>
                  <span style={{
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    color: '#e0f0e8'
                  }}>
                    Nutrition Agent
                  </span>
                </div>
                <p style={{
                  margin: 0,
                  fontSize: '0.85rem',
                  color: '#a8e6cf',
                  lineHeight: '1.5'
                }}>
                  Selenium and Vitamin E levels adequate. Dry period nutrition plan supports natural immune function. No deficiency risk detected.
                </p>
              </div>
            </div>

            {/* Final Synthesis */}
            <div style={{
              background: '#1a4a3a',
              borderRadius: '12px',
              padding: '20px',
              border: '2px solid #5aaa9a'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '12px'
              }}>
                <FileText size={20} color="#7dcea0" strokeWidth={2} />
                <span style={{
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: '#7dcea0',
                  letterSpacing: '0.5px'
                }}>
                  FINAL RECOMMENDATION
                </span>
              </div>
              <p style={{
                fontSize: '0.95rem',
                color: '#e0f0e8',
                margin: '0 0 12px 0',
                lineHeight: '1.6',
                fontWeight: '500'
              }}>
                Use <strong style={{ color: '#7dcea0' }}>teat sealant only</strong> (non-antibiotic DCT) for dry-off treatment.
              </p>
              <div style={{
                paddingTop: '12px',
                borderTop: '1px solid #2a5a4a',
                fontSize: '0.75rem',
                color: '#8dcaa8'
              }}>
                <strong>Confidence:</strong> High (92%) • <strong>Sources:</strong> Swiss AB Reduction Program, Farm Records, Veterinary DB
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: '80px',
        color: '#4a7a6a',
        fontSize: '0.85rem'
      }}>
        Powered by{' '}
        <a
          href="https://www.next-lab.tech"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#7dcea0',
            textDecoration: 'none',
            borderBottom: '1px solid #7dcea040',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#a8e6cf';
            e.target.style.borderBottomColor = '#a8e6cf';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#7dcea0';
            e.target.style.borderBottomColor = '#7dcea040';
          }}
        >
          www.next-lab.tech
        </a>
      </div>
    </div>
  );
};

export default BeoNexusArchitecture;
