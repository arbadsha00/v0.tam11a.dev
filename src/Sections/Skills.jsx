import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Skills = () => {
  const skills = [
    {
      icon: <Icon icon="ri:javascript-fill" width="40" height="40" />,
    },
    {
      icon: <Icon icon="lineicons:typescript" width="40" height="40" />,
    },
    {
      icon: <Icon icon="flowbite:css-solid" width="40" height="40" />,
    },
    {
      icon: <Icon icon="mdi:tailwind" width="40" height="40" />,
    },
    {
      icon: <Icon icon="mdi:react" width="40" height="40" />,
    },
    {
      icon: <Icon icon="ri:nextjs-line" width="40" height="40" />,
    },
    {
      icon: <Icon icon="akar-icons:vue-fill" width="40" height="40" />,
    },
    {
      icon: <Icon icon="file-icons:expo" width="40" height="40" />,
    },

    {
      icon: <Icon icon="lineicons:nuxt" width="40" height="40" />,
    },
    {
      icon: <Icon icon="lineicons:astro" width="40" height="40" />,
    },
    {
      icon: <Icon icon="file-icons:nestjs" width="40" height="40" />,
    },
    {
      icon: <Icon icon="akar-icons:django-fill" width="40" height="40" />,
    },
    {
      icon: <Icon icon="ant-design:python-outlined" width="40" height="40" />,
    },
    {
      icon: <Icon icon="akar-icons:postgresql-fill" width="40" height="40" />,
    },
    {
      icon: <Icon icon="lineicons:mysql" width="40" height="40" />,
    },
    {
      icon: <Icon icon="flowbite:mongo-db-solid" width="40" height="40" />,
    },
    {
      icon: <Icon icon="bi:git" width="40" height="40" />,
    },
    {
      icon: <Icon icon="cib:nginx" width="40" height="40" />,
    },
    {
      icon: <Icon icon="cib:docker" width="40" height="40" />,
    },
    {
      icon: <Icon icon="mdi:jira" width="40" height="40" />,
    },
    {
      icon: <Icon icon="lineicons:figma" width="40" height="40" />,
    },
    {
      icon: <Icon icon="lineicons:webflow" width="40" height="40" />,
    },
    {
      icon: <Icon icon="file-icons:wix" width="40" height="40" />,
    },
    {
      icon: <Icon icon="lineicons:framer" width="40" height="40" />,
    },
  ];

  return (
    <div className="overflow-auto whitespace-nowrap hide-scrollbar ">
      <div className="flex  gap-2  md:gap-4">
        {skills.slice(0, 12).map((skill, index) => (
          <div
            key={index}
            className="card-bg text-secondary-2 min-w-[84px]  p-4 md:p-6"
          >
            {skill.icon}
          </div>
        ))}
      </div>
      <div className="flex mt-2 md:mt-4 gap-2  md:gap-4">
        {skills.slice(12, 24).map((skill, index) => (
          <div
            key={index}
            className="card-bg text-secondary-2 min-w-[84px]  p-4 md:p-6"
          >
            {skill.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
