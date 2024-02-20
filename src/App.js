import React from "react";
import {
  PDFViewer,
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { Link } from "@react-pdf/renderer";
import profilepic from "./profilepic.png";
import dicon from "./dicon.png";
import user from "./icons/user.png";
import edu from "./icons/edu.png";
import work from "./icons/work.png";
import project from "./icons/project.png";
import volunteer from "./icons/volunteer.png";
import phone from "./icons/phone.png";
import mail from "./icons/mail.png";
import location from "./icons/location.png";
import bdate from "./icons/cake.png";
import linkedin from "./icons/linked.png";
import github from "./icons/github.png";
import twitter from "./icons/twitter.png";

const baseFontSize = 14;
const headerColor = "#347CE9";
const textColor = "#616161";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    color: textColor,
    padding: 20,
  },
  topbatch: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  topbatch2: {
    justifyContent: "center",
  },
  row100: {
    flexDirection: "row",
    marginTop: 12,
    gap: 20,
  },
  column70: {
    width: "70%",
    paddingRight: 10,
  },
  column30: {
    width: "20%",
  },
  eachcontainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 8,
  },
  container: {
    gap: 4,
  },
  comprow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  comp: {
    marginBottom: 10,
    gap: 4,
  },
  leftcontainer: {
    gap: 4,
    marginBottom: 10,
  },
  leftcompcontainer: {
    flexDirection: "row",
    gap: 4,
  },
  title: {
    fontSize: baseFontSize + 6,
    color: headerColor,
    marginBottom: 2,
  },
  header: {
    fontSize: baseFontSize,
    color: "#000",
    marginBottom: 2,
  },
  subheader: {
    fontSize: baseFontSize - 6,
    flexDirection: "row",
  },
  description: {
    fontSize: baseFontSize - 5,
    letterSpacing: 0.2,
    maxWidth: 350,
    textAlign: "justify",
  },
  compheader: {
    fontSize: baseFontSize - 2,
    color: "#18191A",
  },
  compsubheader: {
    fontSize: baseFontSize - 4,
    color: "#4C4E54",
  },
  comprowtext: {
    fontSize: baseFontSize - 6,
    color: "#4C4E54",
  },
  profilepic: {
    height: 70,
    width: 65,
    borderRadius: 5,
    objectFit: "cover",
  },
  icon: {
    height: 12,
    width: 12,
    objectFit: "cover",
    marginTop: 1,
  },
  progressBarContainer: {
    width: "100%",
    height: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  progressBar: {
    height: "100%",
    borderRadius: 100,
    backgroundColor: headerColor,
  },
});

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
    </View>
  );
};

const Details = ({ icon, text, link }) => {
  return (
    <View
      style={[styles.leftcompcontainer, { alignItems: "center", margin: 0 }]}
    >
      <Image
        src={icon}
        style={[styles.icon, { height: 12, width: 14, objectFit: "contain" }]}
      />
      {link ? (
        <Text>
          <Link
            src={link}
            style={[styles.compsubheader, { textDecoration: "none" }]}
          >
            {text}
          </Link>
        </Text>
      ) : (
        <Text style={styles.compsubheader}>{text}</Text>
      )}
    </View>
  );
};

const SkillItem = ({ skill, progress }) => {
  return (
    <View
      style={[styles.leftcompcontainer, { margin: 0, flexDirection: "column" }]}
    >
      <Text style={styles.compsubheader}>{skill}</Text>
      <ProgressBar progress={progress} />
    </View>
  );
};

const App = () => {
  const profileData = {
    name: "Yogesh SJ",
    role: "Developer / Designer",
    profileDescription:
      "I'm a creative app/web developer and designer known for crafting functional, innovative solutions. A multitasker by nature, I excel in dynamic environments and have strong team management skills.",
  };

  const educationData = [
    {
      institute: "SRM Institute of Science and Technology, Ramapuram",
      degree: "B.Tech Computer Science and Engineering",
      date: "2021 - Present",
      score: "CGPA: 9.6",
    },
    {
      institute: "SRM Nightingale Matriculation Higher Secondary School",
      degree: "Senior Secondary (XII)",
      date: "2020 - 2021",
      score: "Score: 78%",
    },
    {
      institute: "SRM Nightingale Matriculation Higher Secondary School",
      degree: "Secondary (X)",
      date: "2019 - 2021",
      score: "Score: 78%",
    },
  ];

  const workExperienceData = [
    {
      position: "Team Lead / Web Developer - Freelance",
      company: "Seed foundation of PEC(NGO)",
      date: "Oct, 2023 - Dec, 2024",
      description:
        "As Team Lead at Seed Foundation of PEC, I demonstrated React JS and AWS skills, led Scrum meetings, and managed projects for impactful online presence.",
    },
    {
      position: "UI/UX Designer - Internship",
      company: "Shami innovation and technologies Limited",
      date: "Oct, 2023 - Jan, 2024",
      description:
        "Throughout my tenure as a UI/UX Designer, I actively contributed to projects such as EduShamiit and WebDem, playing a key role in crafting engaging user interfaces and enhancing user experiences.",
    },
    {
      position: "Java Developer - Internship",
      company: "Shiash Info Solutions Private Limited",
      date: "Jan, 2022 - May, 2022",
      description:
        "During my Java Developer internship, I gained practical experience with Java programming and Apache NetBeans, along with exposure to Angular JS fundamentals",
    },
    {
      position: "Project Team Lead - Part Time",
      company: "Cybernaut Edu-Tech LLP",
      date: "May, 2022 - Oct, 2022",
      description:
        "Promoted to Project Team Lead post-internship, overseeing projects like Hospital Management System, refining leadership and team management skills.",
    },
    {
      position: "C++ Programmer - Internship",
      company: "Cybernaut Edu-Tech LLP",
      date: "Jan, 2022 - May, 2022",
      description:
        "Secured C++ programmer internship after excelling in workshop. Enhanced programming skills and teamwork ability.",
    },
  ];
  const projectsData = [
    {
      position: "Student Education Portal",
      company: "App Development",
      description: "Skills Used: XML, Java, Firebase, Figma, Lucidchart",
    },
    {
      position: "Seed Foundation of PEC",
      company: "Web Development",
      description:
        "Skills Used: React JS, AWS, Figma, Agile Project Development",
    },
    {
      position: "Book-King App",
      company: "UI/UX Designing",
      description: "Skills Used: Figma",
    },
    {
      position: "Multi Language Chat-Emotion Detection (NLP)",
      company: "AIML",
      description:
        "Skills Used: Machine Learning, Streamlit, scikit-learn, Natural Language Toolkit",
    },
  ];
  const volunteerExperienceData = [
    {
      position: "App Development - Guest lecture",
      company: "IGNITE'24, SRM IST Ramapuram",
      date: "21 Jan, 2024",
      description:
        "At IGNITE'24, I highlighted app development with a focus on an Instagram Clone, demonstrating practical insights into modern application design and functionality.",
    },
    {
      position: "Web Application - Guest lecture",
      company: "IGNITE'23, SRM IST Ramapuram",
      date: "02 Feb, 2023",
      description:
        "At IGNITE'23, I delivered an inspiring talk on web application development, focusing on cutting-edge trends and best practices.",
    },
    {
      position: "Class Representative",
      company: "CSE G, SRM IST Ramapuram",
      date: "Jul, 2022 - Dec, 2022",
      description:
        "As a Class Representative, I bridged communication between students and faculty, organized events, and fostered collaboration, honing leadership and interpersonal skills.",
    },
    {
      position: "Web Developer Member",
      company: "Code Chef, SRM IST Ramapuram",
      date: "Jan, 2021 - Apr, 2023",
      description:
        "As a Code-chef Club member, I actively contributed to diverse assignments and organized notable events at SRM Ramapuram, demonstrating commitment to both technical excellence and community engagement.",
    },
  ];

  const detailsData = [
    { icon: phone, text: "+91 8925263943" },
    { icon: mail, text: "sjyogesh23@gmail.com" },
    { icon: location, text: "Chennai, India" },
    { icon: bdate, text: "23.12.2003" },
  ];

  const linksData = [
    {
      icon: linkedin,
      text: "Yogesh SJ",
      link: "https://www.linkedin.com/in/yogeshsj/",
    },
    { icon: github, text: "sjyogesh23", link: "https://github.com/sjyogesh23" },
    {
      icon: twitter,
      text: "Yogesh_SJ23",
      link: "https://twitter.com/Yogesh_SJ23",
    },
  ];

  const skillsData = [
    { skill: "React JS", progress: 0.9 },
    { skill: "Tailwind CSS", progress: 1.0 },
    { skill: "React Native", progress: 0.7 },
    { skill: "MongoDB", progress: 0.7 },
    { skill: "XML/Java - App Development", progress: 0.75 },
    { skill: "Firebase", progress: 0.55 },
    { skill: "Python", progress: 0.9 },
    { skill: "Machine Learning", progress: 0.7 },
    { skill: "Data Science", progress: 0.65 },
    { skill: "SQL", progress: 0.7 },
    { skill: "Git/ GitHub", progress: 1.0 },
    { skill: "Figma - UI/UX Design", progress: 1.0 },
  ];

  const LangData = [
    { skill: "English", progress: 0.9 },
    { skill: "Tamil", progress: 1.0 },
    { skill: "French", progress: 0.3 },
    { skill: "German", progress: 0.4 },
  ];
  const knowData = [
    { title: "Software Engineering" },
    { title: "Data Structures and Algorithms" },
    { title: "Machine Learning" },
    { title: "Data Science" },
    { title: "User Interface" },
    { title: "User Experience" },
    { title: "Prompt Engineering" },
  ];
  const extraData = [
    { title: "Music directing" },
    { title: "Piano" },
    { title: "Lyricist" },
    { title: "Suduko" },
    { title: "Chess" },
  ];

  return (
    <div className="App h-screen">
      <PDFViewer width="100%" height="100%">
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.topbatch}>
              <Image src={profilepic} style={styles.profilepic} />{" "}
              <View style={styles.topbatch2}>
                <Text style={styles.title}>{profileData.name}</Text>
                <Text style={[styles.subheader, { fontSize: 12 }]}>
                  {profileData.role}
                </Text>
              </View>
            </View>

            <View style={styles.row100}>
              <View style={styles.column70}>
                <View style={styles.eachcontainer}>
                  <Image src={user} style={styles.icon} />

                  <View style={styles.container}>
                    <Text style={styles.header}>Profile</Text>
                    <View style={styles.comp}>
                      <Text
                        style={{
                          fontSize: 11,
                          letterSpacing: 0,
                          textAlign: "justify",
                        }}
                      >
                        {profileData.profileDescription}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.eachcontainer}>
                  <Image
                    src={edu}
                    style={[styles.icon, { height: 15, width: 14 }]}
                  />

                  <View style={styles.container}>
                    <Text style={styles.header}>Education</Text>
                    {educationData.map((edu, index) => (
                      <View style={styles.comp} key={index}>
                        <Text style={styles.compheader}>{edu.institute}</Text>
                        <Text style={styles.compsubheader}>{edu.degree}</Text>
                        <View style={styles.comprow}>
                          <Text style={styles.comprowtext}>{edu.date}</Text>
                          <Text style={styles.comprowtext}>{edu.score}</Text>
                        </View>
                      </View>
                    ))}
                  </View>
                </View>
                <View style={styles.eachcontainer}>
                  <Image src={work} style={styles.icon} />
                  <View style={styles.container}>
                    <Text style={styles.header}>Work Experience</Text>
                    {workExperienceData.map((exp, index) => (
                      <View style={styles.comp} key={index}>
                        <Text style={styles.compheader}>{exp.position}</Text>
                        <View style={styles.comprow}>
                          <Text style={styles.comprowtext}>{exp.company}</Text>
                          <Text style={styles.comprowtext}>{exp.date}</Text>
                        </View>
                        <Text style={styles.description}>
                          {exp.description}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
              <View style={styles.column30}>
                <View style={styles.leftcontainer}>
                  <Text style={styles.header}>Details</Text>
                  {detailsData.map((detail, index) => (
                    <Details
                      key={index}
                      icon={detail.icon}
                      text={detail.text}
                    />
                  ))}
                </View>
                <View style={styles.leftcontainer}>
                  <Text style={styles.header}>Links</Text>
                  {linksData.map((link, index) => (
                    <Details
                      key={index}
                      icon={link.icon}
                      text={link.text}
                      link={link.link}
                    />
                  ))}
                </View>
                <View style={styles.leftcontainer}>
                  <Text style={styles.header}>Skills</Text>
                  {skillsData.map((skill, index) => (
                    <SkillItem
                      key={index}
                      skill={skill.skill}
                      progress={skill.progress}
                    />
                  ))}
                </View>
                <View style={styles.leftcontainer}>
                  <Text style={styles.header}>Languages</Text>
                  {LangData.map((skill, index) => (
                    <SkillItem
                      key={index}
                      skill={skill.skill}
                      progress={skill.progress}
                    />
                  ))}
                </View>
              </View>
            </View>
          </Page>
          <Page size="A4" style={styles.page}>
            <View style={styles.row100}>
              <View style={styles.column70}>
                <View style={styles.eachcontainer}>
                  <Image src={project} style={styles.icon} />
                  <View style={styles.container}>
                    <Text style={styles.header}>Projects</Text>
                    {projectsData.map((exp, index) => (
                      <View style={styles.comp} key={index}>
                        <Text style={styles.compheader}>{exp.position}</Text>
                        <View style={styles.comprow}>
                          <Text style={styles.comprowtext}>{exp.company}</Text>
                          <Text style={styles.comprowtext}>{exp.date}</Text>
                        </View>
                        <Text style={styles.description}>
                          {exp.description}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
                <View style={styles.eachcontainer}>
                  <Image
                    src={volunteer}
                    style={[styles.icon, { width: 16, marginTop: 2 }]}
                  />
                  <View style={styles.container}>
                    <Text style={styles.header}>Volunteer Experience</Text>
                    {volunteerExperienceData.map((exp, index) => (
                      <View style={styles.comp} key={index}>
                        <Text style={styles.compheader}>{exp.position}</Text>
                        <View style={styles.comprow}>
                          <Text style={styles.comprowtext}>{exp.company}</Text>
                          <Text style={styles.comprowtext}>{exp.date}</Text>
                        </View>
                        <Text style={styles.description}>
                          {exp.description}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
              <View style={styles.column30}>
                <View style={styles.leftcontainer}>
                  <Text style={styles.header}>Knowledge</Text>
                  {knowData.map((extra, index) => (
                    <Text style={styles.compsubheader} key={index}>
                      {extra.title}
                    </Text>
                  ))}
                </View>
                <View style={styles.leftcontainer}>
                  <Text style={styles.header}>Extra-curricular</Text>
                  {extraData.map((extra, index) => (
                    <Text style={styles.compsubheader} key={index}>
                      {extra.title}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default App;
