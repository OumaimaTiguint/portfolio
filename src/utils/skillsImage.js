import html from '../assets/svg/skills/html.svg'
import css from '../assets/svg/skills/css.svg'
import angular from '../assets/svg/skills/angular.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import git from '../assets/svg/skills/git.svg'
import figma from '../assets/svg/skills/figma.svg'
import ionic from '../assets/svg/skills/ionic.svg'
import node from '../assets/svg/skills/node.svg'
import react from '../assets/svg/skills/react.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'typescript':
            return typescript;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'git':
            return git;
        case 'figma':
            return figma;
        case 'ionic':
            return ionic;
        case 'node js':
            return node;
        case 'react':
            return react;
        case 'tailwind':
            return tailwind;
        default:
            break;
    }
}