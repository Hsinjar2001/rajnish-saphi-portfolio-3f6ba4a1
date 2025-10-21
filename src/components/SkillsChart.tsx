import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts";

const SkillsChart = () => {
  const categoryProficiency = [
    { category: "Frontend", proficiency: 85, color: "hsl(var(--primary))" },
    { category: "Backend", proficiency: 80, color: "hsl(var(--accent))" },
    { category: "Data Analysis", proficiency: 75, color: "hsl(177 64% 42%)" },
    { category: "Tools", proficiency: 90, color: "hsl(231 48% 35%)" },
  ];

  const skillsData = [
    { skill: "React.js", level: 90 },
    { skill: "Node.js", level: 85 },
    { skill: "SQL", level: 80 },
    { skill: "Python", level: 85 },
    { skill: "JavaScript", level: 90 },
    { skill: "Tableau", level: 75 },
    { skill: "MongoDB", level: 80 },
    { skill: "Tailwind", level: 85 },
  ];

  return (
    <div className="space-y-8">
      {/* Radar Chart - Skills Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Skills Proficiency Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={categoryProficiency}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis 
                dataKey="category" 
                tick={{ fill: "hsl(var(--foreground))", fontSize: 14 }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <Radar 
                name="Proficiency" 
                dataKey="proficiency" 
                stroke="hsl(var(--primary))" 
                fill="hsl(var(--primary))" 
                fillOpacity={0.6} 
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  color: "hsl(var(--foreground))"
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Bar Chart - Top Skills */}
      <Card>
        <CardHeader>
          <CardTitle>Top Skills Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={skillsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="skill" 
                tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={100}
              />
              <YAxis 
                tick={{ fill: "hsl(var(--muted-foreground))" }}
                domain={[0, 100]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  color: "hsl(var(--foreground))"
                }}
                formatter={(value) => [`${value}%`, 'Proficiency']}
              />
              <Bar dataKey="level" radius={[8, 8, 0, 0]}>
                {skillsData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={categoryProficiency[index % categoryProficiency.length].color}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillsChart;
