// Edit this file to update portfolio content. The layout is generated automatically.
window.PORTFOLIO_DATA = {
  "profile": {
    "name": "Sri Harish Singaravelan",
    "initials": "SH",
    "eyebrow": "Mechanical Design · Mechatronics Engineer · Robotics",
    "headline": "I design, build, and test mechanical systems that bridge hardware, robotics, and automation.",
    "location": "Boston, USA",
    "email": "sriharish1108@gmail.com",
    "phone": "+1 (857) 424-7104",
    "resume": "Sri-Harish-Singaravelan-Resume.pdf",
    "links": [
      {
        "label": "LinkedIn",
        "url": "https://www.linkedin.com/in/sriharish-omsingaravelan/"
      },
      {
        "label": "GrabCAD",
        "url": "https://grabcad.com/sri.harish.singaravelan-1/models"
      }
    ],
    "introduction": "I'm Sri Harish, a Mechanical Design and Mechatronics Engineer with experience across robotics, automation, and product development. My work spans mechanical design, prototyping, electromechanical integration, and testing. I particularly like taking ideas from CAD and early concepts to physical systems that can be built, tested, improved, and deployed in real-world conditions."
  },
  "metrics": [],
  "projects": [
    {
      "id": "lidar-mapping",
      "number": "01",
      "title": "LiDAR Indoor Mapping Robot",
      "subtitle": "Mobile robotic mapping using ROS, Hector SLAM, and Raspberry Pi",
      "period": "Oct 2023 – Dec 2023",
      "institution": "Northeastern University",
      "image": "assets/lidar-chassis.webp",
      "imageAlt": "Original custom-fabricated wooden mobile robot chassis on a workshop bench",
      "mediaNote": "Original prototype photography",
      "overview": "Developed a mobile robotic platform that uses 360° LiDAR and Hector SLAM to build a live 2D occupancy map in GPS-denied indoor environments.",
      "challenge": "Indoor localization cannot rely on GPS. The project required the sensing hardware, onboard computing, power, mobile platform, and mapping software to operate as one reliable system while managing real-world constraints like latency, power consumption, and sensor noise.",
      "architecture": [
        "360° LiDAR",
        "Raspberry Pi 4",
        "ROS Noetic",
        "Hector SLAM",
        "2D occupancy grid",
        "RViz"
      ],
      "outcomes": [
        "Mapped the Dodge Hall entrance and corridor at Northeastern University in real time.",
        "Captured walls, corridors, pillars, and surrounding objects in the final occupancy map.",
        "Redesigned the RC-car proof of concept into a custom laser-cut chassis and drivetrain.",
        "Characterized mapping errors caused by sharp turns, speed, glass, and reflective surfaces."
      ],
      "contributions": [
        "Integrated the FHL-LD19 LiDAR, Raspberry Pi, camera, storage, and portable power system.",
        "Configured ROS Noetic, LiDAR drivers, Hector SLAM, RViz, and ROS Map Server.",
        "Collected and evaluated LiDAR data during real-world indoor testing.",
        "Fabricated the custom chassis and developed drivetrain motor-mount interfaces.",
        "Integrated and tested motors, wheels, electronics, sensors, and power hardware."
      ],
      "stack": [
        "ROS Noetic",
        "Hector SLAM",
        "RViz",
        "Raspberry Pi 4",
        "FHL-LD19 LiDAR",
        "Laser cutting",
        "Sensor integration"
      ],
      "gallery": [
        {
          "type": "image",
          "src": "assets/lidar-chassis.webp",
          "alt": "Custom laser-cut chassis for the LiDAR mapping robot"
        },
        {
          "type": "image",
          "src": "assets/lidar-electronics.webp",
          "alt": "Electronics and sensor board mounted in a custom bracket"
        },
        {
          "type": "image",
          "src": "assets/lidar-sensor.webp",
          "alt": "Front-facing range sensor in a custom fabricated housing"
        },
        {
          "type": "image",
          "src": "assets/lidar-map.webp",
          "alt": "Final two-dimensional occupancy map of the Dodge Hall indoor route"
        },
        {
          "type": "video",
          "src": "assets/lidar-demo.mp4",
          "title": "Prototype demonstration"
        },
        {
          "type": "video",
          "src": "assets/lidar-drive-test.mp4",
          "title": "Mobile platform drive test"
        }
      ],
      "focus": "Robotics + fabrication"
    },
    {
      "id": "sae-quadcopter",
      "number": "02",
      "title": "SAE Racing Quadcopter",
      "subtitle": "Mechanical design, structural analysis, and optimization of a competition frame",
      "period": "Jan 2022 – May 2022",
      "institution": "LICET",
      "image": "assets/sae-racing-quadcopter.webp",
      "imageAlt": "SolidWorks CAD render of Sri Harish's SAE racing quadcopter frame",
      "mediaNote": "Original CAD render",
      "overview": "Led the mechanical design and CAD development of a lightweight custom quadcopter frame for an intercollegiate SAE Drone Racing competition.",
      "challenge": "A racing frame must balance low mass, stiffness, durability, component protection, manufacturability, and center-of-mass control. Every geometric decision affects both structural behavior and aerodynamic response—trade-offs must be made carefully and validated.",
      "architecture": [
        "System requirements",
        "SolidWorks CAD",
        "Component packaging",
        "FEA",
        "Design iteration",
        "Competition frame"
      ],
      "outcomes": [
        "Developed the frame architecture from the ground up in SolidWorks.",
        "Used FEA findings to guide structural and geometric improvements.",
        "Improved estimated drone responsiveness by 20% through weight-distribution optimization.",
        "Delivered a competition-ready design while protecting team intellectual property."
      ],
      "contributions": [
        "Helped establish the SAE Drone Racing team at LICET.",
        "Led frame CAD, structural layout, and packaging of major vehicle components.",
        "Performed FEA and presented design recommendations in engineering reviews.",
        "Iterated geometry around stiffness, weight, propulsion hardware, and assembly requirements."
      ],
      "stack": [
        "SolidWorks",
        "FEA",
        "Mechanical design",
        "Structural analysis",
        "Component packaging",
        "Design optimization"
      ],
      "gallery": [
        {
          "type": "image",
          "src": "assets/sae-racing-quadcopter.webp",
          "alt": "SolidWorks CAD render of the SAE racing quadcopter",
          "title": "Competition quadcopter CAD"
        }
      ],
      "focus": "Mechanical design",
      "imageFit": "contain"
    },
    {
      "id": "dc-motor-control",
      "number": "03",
      "title": "DC Motor Position & Speed Control",
      "subtitle": "Hardware characterization, system modeling, and feedback control using Arduino and MATLAB/Simulink",
      "focus": "Controls",
      "period": "Sep 2024 – Dec 2024",
      "institution": "Northeastern University",
      "image": "assets/dc-motor-circuit.webp",
      "imageAlt": "Arduino Uno, breadboard, H-bridge, encoder, and DC motor wiring diagram",
      "imageFit": "contain",
      "mediaNote": "Motor-control hardware wiring",
      "overview": "Developed and experimentally validated closed-loop position and speed control for a geared DC motor using Arduino Uno, encoder feedback, PWM, and MATLAB/Simulink Real-Time Target.",
      "challenge": "The work required connecting physical hardware behavior to a useful control model: characterizing the motor, converting encoder pulses into position and speed, identifying system dynamics, tuning proportional controllers, and explaining the differences between simulated and experimental response.",
      "architecture": [
        "Potentiometer reference input",
        "Arduino Uno and Simulink Real-Time Target",
        "Proportional controller",
        "PWM and L293x H-bridge",
        "Pololu 25D geared DC motor",
        "Encoder feedback"
      ],
      "outcomes": [
        "Measured motor response at 25%, 50%, 75%, and 100% PWM duty cycles, reaching approximately 31 RPM at full duty.",
        "Developed a first-order transfer-function approximation, G(s) = 4.61 / (0.123s + 1), from experimental behavior.",
        "Matched simulated steady-state speed at approximately 30.76 RPM against the measured 31 RPM.",
        "Selected Kp = 20 for position control and Kp = 35 for speed control after comparing tracking error, overshoot, and oscillation."
      ],
      "contributions": [
        "Integrated the DC gearmotor, encoder, Arduino Uno, H-bridge, potentiometer, and external power supply.",
        "Calculated real-time angular position and rotational velocity from encoder feedback.",
        "Built the Simulink and Simscape models and compared them with the physical motor.",
        "Implemented and tuned proportional position and speed controllers.",
        "Investigated the effect of gearbox friction, motor characteristics, and controller gain on real-world response."
      ],
      "stack": [
        "MATLAB",
        "Simulink",
        "Simscape",
        "Arduino Uno",
        "Real-Time Target",
        "Encoder",
        "H-bridge",
        "PWM",
        "System identification",
        "P-control"
      ],
      "gallery": [
        {
          "type": "image",
          "src": "assets/dc-motor-circuit.webp",
          "alt": "Arduino Uno, breadboard, H-bridge, encoder, and DC motor wiring diagram",
          "title": "Hardware circuit and feedback path"
        },
        {
          "type": "image",
          "src": "assets/dc-motor-speed-control.webp",
          "alt": "Simscape speed-control model and response plot",
          "title": "Closed-loop speed-control model"
        }
      ],
      "documentUrl": "documents/dc-motor-position-speed-control-report.pdf",
      "documentLabel": "Read the complete DC motor project report"
    },
    {
      "id": "mems-glucose-system",
      "number": "04",
      "title": "MEMS Glucose Monitoring & Insulin Delivery",
      "subtitle": "Closed-loop biomedical system integrating MEMS sensing, embedded control, and micropump delivery",
      "focus": "Multidisciplinary systems",
      "period": "Sep 2024 – Dec 2024",
      "institution": "Northeastern University",
      "image": "assets/mems-system-overview.webp",
      "imageAlt": "SolidWorks CAD rendering of the enclosed MEMS glucose-monitoring and insulin-delivery device",
      "imageFit": "contain",
      "mediaNote": "Wearable device CAD concept · report available",
      "overview": "Explored the design of a closed-loop glucose-monitoring and automated insulin-delivery system that connects MEMS sensing, embedded processing, wireless communication, control modeling, and a piezoelectric micropump.",
      "challenge": "The central challenge was not an isolated sensor or pump; it was the complete feedback loop. Glucose measurement, computation, dose calculation, microfluidic delivery, device packaging, communication, and safety considerations had to be treated as one multidisciplinary system.",
      "architecture": [
        "MEMS affinity glucose sensor",
        "ESP32 embedded controller",
        "Bergman Minimal Model",
        "PID control and dose calculation",
        "Piezoelectric micropump and microneedle",
        "Continuous feedback and wireless communication"
      ],
      "outcomes": [
        "Defined an end-to-end sensing, computation, control, and actuation architecture.",
        "Modeled glucose-insulin dynamics using the Bergman Minimal Model and PID-based regulation.",
        "Studied a MEMS cantilever sensor concept and its Parylene, photolithography, electroplating, and XeF₂ release process.",
        "Evaluated simulated glucose scenarios, meal-related changes, basal dosing, and dynamic controller response."
      ],
      "contributions": [
        "Contributed to the system architecture connecting the MEMS sensor, ESP32, controller, wireless link, micropump, and delivery interface.",
        "Examined how microscale mechanical behavior could support glucose sensing.",
        "Supported mathematical modeling and PID-control analysis for adaptive insulin delivery.",
        "Connected sensor fabrication, embedded processing, microfluidics, and biomedical packaging into a single design study."
      ],
      "stack": [
        "MEMS",
        "ESP32",
        "PID control",
        "Bergman Minimal Model",
        "Piezoelectric micropump",
        "CGM",
        "Bluetooth",
        "Microfluidics",
        "Parylene",
        "Photolithography"
      ],
      "gallery": [
        {
          "type": "image",
          "src": "assets/mems-system-overview.webp",
          "alt": "SolidWorks CAD rendering of the enclosed MEMS glucose-monitoring and insulin-delivery device",
          "title": "Enclosed wearable-device CAD concept"
        },
        {
          "type": "image",
          "src": "assets/mems-control-results.webp",
          "alt": "Simulated glucose response with PID control and basal dosing",
          "title": "PID-control simulation results"
        }
      ],
      "documentUrl": "documents/mems-glucose-insulin-delivery-report.pdf",
      "documentLabel": "Read the complete MEMS system project report"
    },
    {
      "id": "obstacle-robot",
      "number": "05",
      "title": "Arduino Obstacle-Avoiding Robot",
      "subtitle": "Real-time sense–decide–act control on a mobile robotic platform",
      "period": "Jan 2022 – May 2022",
      "institution": "LICET",
      "image": "assets/obstacle-robot.webp",
      "imageAlt": "Representative engineering visualization of an Arduino obstacle-avoiding robot",
      "mediaNote": "Representative visualization based on the project architecture",
      "overview": "Designed and built a mobile robot that senses obstacles, evaluates available space, and changes direction using embedded control and electromechanical actuation.",
      "challenge": "The goal was to create a complete feedback loop—not simply a vehicle following fixed commands. Sensing, decision logic, servo positioning, power distribution, and differential motor control all had to work in concert to achieve real-time response.",
      "architecture": [
        "HC-SR04 sensor",
        "Arduino Uno",
        "C++ decision logic",
        "L298N driver",
        "Geared DC motors"
      ],
      "outcomes": [
        "Demonstrated real-time obstacle detection and autonomous directional response.",
        "Used servo-driven directional sensing without rotating the entire vehicle.",
        "Integrated low-power control signals with higher-power electromechanical hardware.",
        "Validated the full perception-to-motion loop on a physical prototype."
      ],
      "contributions": [
        "Designed and prototyped the complete mobile robot and electrical architecture.",
        "Integrated the HC-SR04 sensor, servo, L298N dual H-bridge, motors, and power supply.",
        "Developed real-time control logic in C++ using the Arduino IDE.",
        "Tested and troubleshot sensing, motor control, and system-level behavior."
      ],
      "stack": [
        "Arduino Uno",
        "C++",
        "Arduino IDE",
        "HC-SR04",
        "Servo motor",
        "L298N",
        "Embedded systems"
      ],
      "gallery": [
        {
          "type": "image",
          "src": "assets/obstacle-robot.webp",
          "alt": "Representative visualization of the Arduino obstacle-avoiding robot"
        }
      ],
      "focus": "Electronics + embedded"
    }
  ],
  "experience": [
    {
      "id": "berkshire-grey",
      "role": "Mechatronics Intern",
      "company": "Berkshire Grey",
      "location": "Bedford, Massachusetts",
      "period": "Jan 2024 – Jun 2024",
      "highlights": [
        "Worked on robotic pick-and-place systems for warehouse automation across mechanical design, electrical integration, validation, and software-based test automation.",
        "Improved robotic system efficiency by approximately 15% through iterative EOAT and vacuum-valve development.",
        "Redesigned a production barcode-scanner bracket for an ABB IRB 1100, improving SKU detection accuracy by approximately 80%.",
        "Built a servo-driven lifecycle test rig and Python monitoring workflow with sensor data, automated analysis, and Slack alerts."
      ],
      "detailGroups": [
        {
          "title": "Mechanical",
          "items": [
            {
              "title": "Robotic Barcode Scanner Mount",
              "description": "Designed a rigid sheet-metal scanner bracket for an ABB IRB 1100, progressing from CAD and prototype evaluation through drawings, BOMs, engineering release, and implementation."
            },
            {
              "title": "Vacuum Valve & EOAT Development",
              "description": "Designed, 3D printed, assembled, and tested butterfly, poppet, and rotary valve concepts for robotic end-of-arm tooling, iterating designs to reduce cycle time and improve vacuum performance."
            }
          ]
        },
        {
          "title": "Electrical & Controls",
          "items": [
            {
              "title": "Lifecycle Test Automation",
              "description": "Designed a servo-driven lifecycle test rig integrating sensors, actuators, and control hardware, and developed ePLC sequences for repeatable long-duration robotic component testing."
            },
            {
              "title": "Robot Electrical Integration",
              "description": "Developed an override-switch solution for an ABB IRB 1100 safety signal and created the associated wiring documentation while supporting sensor, actuator, and robot I/O integration during testing."
            }
          ]
        },
        {
          "title": "Programming & Data",
          "items": [
            {
              "title": "Python Test Monitoring & Automation",
              "description": "Developed Python tools to retrieve MongoDB test logs, evaluate failures, generate plots, and automate monitoring of long-duration robotic validation tests."
            },
            {
              "title": "Automated Slack Notifications",
              "description": "Integrated the monitoring workflow with Slack to automatically communicate test failures and status information, reducing the need for continuous manual supervision."
            }
          ]
        },
        {
          "title": "Confidentiality",
          "items": [
            {
              "description": "Selected work is presented at a high level to respect Berkshire Grey's proprietary designs and intellectual property. Detailed CAD, drawings, software, and system architecture are intentionally omitted."
            }
          ]
        }
      ],
      "stack": [
        "SolidWorks",
        "ABB IRB 1100",
        "EOAT",
        "Vacuum systems",
        "Python",
        "MongoDB",
        "Slack API",
        "ePLC",
        "Teamcenter",
        "Omnify PLM"
      ],
      "focus": "Real-world mechatronics",
      "metrics": [
        {
          "value": "~80%",
          "label": "SKU detection improvement"
        },
        {
          "value": "~15%",
          "label": "Cycle-time reduction"
        },
        {
          "value": "100+",
          "label": "Validation cycles"
        },
        {
          "value": "~30%",
          "label": "Validation/data accuracy improvement"
        }
      ],
      "gallery": [
        {
          "type": "video",
          "src": "assets/berkshire-butterfly-valve-test-1.mp4",
          "title": "Butterfly Valve Test 1 — Prototype Cycle"
        },
        {
          "type": "video",
          "src": "assets/berkshire-butterfly-valve-test-2.mp4",
          "title": "Butterfly Valve Test 2 — Validation Setup"
        },
        {
          "type": "video",
          "src": "assets/berkshire-poppet-valve-test-1-v2.mp4",
          "title": "Poppet–Butterfly Valve Test 1 — Actuator Assembly"
        },
        {
          "type": "video",
          "src": "assets/berkshire-poppet-valve-test-2-v2.mp4",
          "title": "Poppet–Butterfly Valve Test 2 — Installed Prototype"
        }
      ]
    },
    {
      "id": "symbionic-tech",
      "role": "Mechanical Engineering Intern",
      "company": "Symbionic Tech Pvt Ltd",
      "location": "Chennai, India",
      "period": "Apr 2022 – Jun 2022",
      "highlights": [
        "Developed mechanical architecture, packaging, ergonomics, and prototypes for a wearable upper-limb prosthetic arm.",
        "Refined motor packaging and mount tolerances to reduce vibration by 10% and improve load distribution.",
        "Collaborated with medical and electrical teams on electrode placement, improving sensor data quality and overall performance by 30%.",
        "Used 3D-printed iterations to accelerate user feedback and reduce development time by 30%."
      ],
      "details": [
        {
          "title": "Prosthetic arm development",
          "description": "Contributed to the mechanical architecture of a wearable upper-limb prosthetic arm, balancing structural requirements, range of motion, user comfort, weight, manufacturability, and the packaging of motors, transmissions, electronics, and sensing hardware."
        },
        {
          "title": "Palm, motor, and gear packaging",
          "description": "Redesigned the palm assembly and refined motor placement, mounting, gearing, and tolerances to create a more compact configuration with better balance and lower vibration."
        },
        {
          "title": "Custom elbow cap",
          "description": "Developed a user-specific elbow cap from anatomical information, converted it into manufacturable CAD, and produced the component through 3D printing for assembly evaluation."
        },
        {
          "title": "Electrode and sensor integration",
          "description": "Collaborated with electrical engineers and medical staff on electrode positioning while accounting for fit, accessibility, packaging, wiring, and the device's interaction with the user."
        },
        {
          "title": "Rapid iteration and documentation",
          "description": "Used 3D printing to move repeatedly through design, prototype, evaluation, and refinement, while maintaining BOMs, ECOs, revisions, and component information in Omnify PLM."
        }
      ],
      "stack": [
        "Mechanical design",
        "Prosthetics",
        "CAD",
        "Motor and gear integration",
        "Ergonomics",
        "3D printing",
        "Sensor integration",
        "Omnify PLM"
      ],
      "focus": "Human-centered mechanical product development",
      "metrics": [
        {
          "value": "~10%",
          "label": "Vibration reduction"
        },
        {
          "value": "~30%",
          "label": "Sensor data quality improvement"
        },
        {
          "value": "~30%",
          "label": "Development-time reduction"
        },
        {
          "value": "~20%",
          "label": "Usability improvement"
        }
      ],
      "gallery": [
        {
          "type": "image",
          "src": "assets/symbionic-palm-workshop.webp",
          "alt": "Sri Harish assembling and testing a prosthetic palm in the workshop",
          "title": "Prosthetic palm assembly and testing"
        },
        {
          "type": "image",
          "src": "assets/symbionic-finger-mould.webp",
          "alt": "Prototype prosthetic finger mould on the workbench",
          "title": "Prototype finger mould"
        }
      ]
    },
    {
      "id": "ole-mexican-foods",
      "role": "MEP Mechanical Designer",
      "company": "Ole Mexican Foods",
      "location": "Norcross, Georgia",
      "period": "Aug 2025 – Present",
      "highlights": [
        "Designing multidisciplinary facility systems and evaluating automation opportunities across manufacturing and distribution environments.",
        "Simulate robotic automation workflows in RoboDK, integrating conveyors, pick-and-place robots, and vision systems to evaluate throughput and layouts.",
        "Develop HVAC, plumbing, ventilation, and fire-protection layouts in AutoCAD for production, office, IT, and distribution spaces.",
        "Coordinate construction-ready drawings and implementation with contractors, maintenance, vendors, and plant engineering teams."
      ],
      "details": [
        {
          "title": "Robotic automation simulation",
          "description": "Build and evaluate RoboDK simulations that connect conveyors, pick-and-place robots, and vision systems so layout options and expected throughput can be reviewed before implementation."
        },
        {
          "title": "Facility systems design",
          "description": "Develop coordinated HVAC, plumbing, ventilation, and fire-protection layouts in AutoCAD for production, office, IT, and distribution environments."
        },
        {
          "title": "Engineering coordination",
          "description": "Prepare construction-ready drawings and work with contractors, maintenance teams, vendors, and plant engineers to move designs toward implementation."
        }
      ],
      "stack": [
        "RoboDK",
        "AutoCAD",
        "Robotic automation",
        "HVAC",
        "Plumbing",
        "Fire protection",
        "Facility design"
      ],
      "focus": "Industrial automation + facility engineering",
      "metrics": [],
      "gallery": []
    },
    {
      "id": "techecy",
      "role": "Mechanical Engineer",
      "company": "Techecy",
      "location": "India",
      "period": "Jan 2021 – Dec 2021",
      "highlights": [
        "Developed plastic and sheet-metal components for consumer electronics from design review through prototyping and manufacturing handoff.",
        "Reduced tooling costs by 12% and pilot-run part rejections by 20% through DFM-focused design and supplier reviews.",
        "Improved heat dissipation efficiency by 22% using thermal and structural simulation.",
        "Supported BOMs, drawings, supplier negotiations, prototype builds, and corrective design actions."
      ],
      "details": [
        {
          "title": "Product and component design",
          "description": "Engineered plastic and sheet-metal parts for consumer electronics, translating product requirements into manufacturable component designs."
        },
        {
          "title": "Simulation and design improvement",
          "description": "Used thermal and structural analysis to identify design changes that improved heat dissipation while maintaining mechanical performance."
        },
        {
          "title": "Manufacturing handoff",
          "description": "Supported DFM reviews, BOMs, drawings, supplier coordination, prototype builds, pilot runs, and corrective actions through release."
        }
      ],
      "stack": [
        "Product development",
        "Sheet metal",
        "Plastic design",
        "DFM",
        "Thermal analysis",
        "Structural simulation",
        "BOM"
      ],
      "focus": "Design for manufacturing",
      "metrics": [],
      "gallery": []
    },
    {
      "id": "tvs-training",
      "role": "Mechanical Design Intern",
      "company": "TVS Training and Services Ltd",
      "location": "Chennai, India",
      "period": "Sep 2020 – Oct 2020",
      "highlights": [
        "Built practical experience in automotive manufacturing, quality inspection, machining, welding, assembly, and lean production.",
        "Worked with CNC machining, welding, assembly processes, and standard metrology tools.",
        "Supported quality checks and root-cause analysis while reducing inspection time by 10%.",
        "Applied Kaizen and 5S principles in a production-oriented training environment."
      ],
      "details": [
        {
          "title": "Manufacturing processes",
          "description": "Worked with CNC machining, welding, and assembly workflows while learning how process decisions influence part quality and production efficiency."
        },
        {
          "title": "Quality and metrology",
          "description": "Supported dimensional inspection with standard metrology tools and participated in root-cause analysis for manufacturing quality issues."
        },
        {
          "title": "Lean production",
          "description": "Applied Kaizen and 5S principles to a production-oriented environment and helped streamline inspection activities."
        }
      ],
      "stack": [
        "CNC machining",
        "Welding",
        "Assembly",
        "Metrology",
        "Quality inspection",
        "Root-cause analysis",
        "Kaizen",
        "5S"
      ],
      "focus": "Manufacturing + quality",
      "metrics": [],
      "gallery": []
    }
  ],
  "about": [
    "I'm a Mechanical Engineer with a background spanning mechanical design, mechatronics, robotics, automation, and product development. What has always interested me most about engineering is taking an idea, understanding the problem behind it, and working through the process of turning it into something that functions in the real world.",
    "My experience has given me the opportunity to work on a wide range of engineering problems, from designing and testing robotic hardware and end-of-arm tooling to developing automated test systems, working with sensors and actuators, and supporting automation and manufacturing projects. I naturally want to understand how the mechanism, electronics, sensors, controls, manufacturing decisions, and complete system influence one another.",
    "That perspective has shaped me into a systems-minded builder who started in mechanical engineering. Mechanical design remains the foundation of how I approach problems, but I'm equally drawn to the interfaces between mechanical hardware, robotics, controls, software, and manufacturing.",
    "I hold a Master's degree in Mechanical Engineering with a concentration in Mechatronics from Northeastern University and am a Certified SOLIDWORKS Professional (CSWP). My work has reinforced a hands-on, iterative approach: understand the requirements, design a solution, build it, test it, learn from what doesn't work, and improve it.",
    "Ultimately, what excites me most is seeing something move beyond a concept, CAD model, or simulation and become a physical system that actually works. I'm always looking to learn, build, and take on engineering problems that push me beyond what I already know."
  ],
  "skillGroups": [
    {
      "title": "CAD & product design",
      "items": [
        "SolidWorks (CSWP)",
        "AutoCAD",
        "CATIA",
        "Inventor",
        "Revit",
        "Creo",
        "Fusion 360",
        "GD&T",
        "DFM/DFA"
      ]
    },
    {
      "title": "Simulation & validation",
      "items": [
        "ANSYS Workbench",
        "SolidWorks Simulation",
        "Abaqus",
        "FEA",
        "Thermal analysis",
        "Fluid simulation",
        "Tolerance analysis"
      ]
    },
    {
      "title": "Robotics & mechatronics",
      "items": [
        "RoboDK",
        "ROS 2",
        "PLCs",
        "Sensors",
        "Actuators",
        "EOAT",
        "Control systems",
        "System integration"
      ]
    },
    {
      "title": "Prototyping & manufacturing",
      "items": [
        "FDM / SLA / SLS",
        "Rapid prototyping",
        "Sheet metal",
        "CNC processes",
        "BOM",
        "ECO",
        "Engineering drawings"
      ]
    },
    {
      "title": "Programming & engineering tools",
      "items": [
        "Python",
        "MATLAB",
        "C++",
        "MongoDB",
        "Teamcenter",
        "Omnify PLM",
        "SolidWorks PDM",
        "Jira",
        "Git"
      ]
    }
  ],
  "education": [
    {
      "degree": "M.S. Mechanical Engineering",
      "focus": "Mechatronics · GPA 3.4",
      "school": "Northeastern University",
      "location": "Boston, USA",
      "period": "Sep 2022 – Dec 2024",
      "logo": "assets/northeastern-logo.webp",
      "logoAlt": "Northeastern University logo"
    },
    {
      "degree": "B.E. Mechanical Engineering",
      "focus": "GPA 3.5",
      "school": "Loyola-ICAM College of Engineering and Technology",
      "location": "Chennai, India",
      "period": "Aug 2018 – Jun 2022",
      "logo": "assets/licet-logo.webp",
      "logoAlt": "LICET logo"
    }
  ],
  "certifications": [
    {
      "label": "Certified SOLIDWORKS Professional (CSWP) — Dassault Systèmes",
      "url": "https://pdfhost.io/v/QVuP3FvkPE_SolidWorks_Professional_Certification"
    },
    {
      "label": "Arduino: Foundations",
      "url": "https://www.linkedin.com/learning/certificates/dda7fd915e290b3c2a3a0f0d653940f2b9108461fe536465e091d7271af54009"
    },
    {
      "label": "SOLIDWORKS: SimulationXpress",
      "url": "https://www.linkedin.com/learning/certificates/9466c5b23f9ab95ec585a8a3d34531b366c2e3deb0bdbe3b59978f4b377f9207"
    },
    {
      "label": "MATLAB — MathWorks",
      "url": "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=cc932c36-e8b0-44c1-9f1a-93a4d513104d&"
    },
    {
      "label": "ANSYS Workbench",
      "url": "https://www.udemy.com/certificate/UC-2a731cc1-c068-4074-9d06-076b9ca592ec/"
    },
    {
      "label": "Python",
      "url": "https://www.udemy.com/certificate/UC-d4ba58b9-5da8-4f9d-a312-d15f128d7dc2/"
    }
  ],
  "cadModels": [
    {
      "title": "Chain-Link Mechanism",
      "focus": "Assembly motion",
      "image": "assets/cad-chain-link.webp",
      "imageAlt": "SolidWorks assembly render of a multi-link mechanical chain",
      "description": "A constrained multi-component SolidWorks assembly exploring link geometry, pin connections, mating strategy, and articulated motion.",
      "url": "https://grabcad.com/sri.harish.singaravelan-1/models"
    },
    {
      "title": "AirPods CAD Model",
      "focus": "Surface modeling",
      "image": "assets/cad-airpods.webp",
      "imageAlt": "Rendered CAD model of a pair of wireless earbuds",
      "description": "A consumer-product form study focused on smooth surfaces, compact geometry, symmetry, and presentation-quality rendering.",
      "url": "https://grabcad.com/sri.harish.singaravelan-1/models"
    }
  ]
};
