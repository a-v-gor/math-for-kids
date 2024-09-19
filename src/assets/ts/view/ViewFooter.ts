import returnElement from './returnElement';

export default class ViewFooter {
  footer: HTMLElement;
  constructor() {
    this.footer = returnElement({
      tag: 'footer',
      classes: ['footer'],
    });
    const wrapper = returnElement({
      tag: 'div',
      classes: ['wrapper', 'footer__wrapper'],
    });
    const copyright = returnElement({
      tag: 'div',
      classes: ['footer__block'],
    });
    const copyrightTitle = returnElement({
      tag: 'div',
      classes: ['footer__block-title'],
      textContent: '© ',
    });
    const copyrightLink = returnElement({
      tag: 'a',
      classes: ['footer__link'],
      attrib: [
        { name: 'href', value: 'https://github.com/a-v-gor' },
        { name: 'target', value: '_blank' },
      ],
      textContent: 'А. Горбенко',
    });
    const year = returnElement({
      tag: 'div',
      classes: ['footer__block', 'footer__year'],
      textContent: '2024',
    });
    const design = returnElement({
      tag: 'div',
      classes: ['footer__block'],
    });
    const designTitle = returnElement({
      tag: 'div',
      classes: ['footer__block-title'],
      textContent: 'Идея дизайна: ',
    });
    const designLink = returnElement({
      tag: 'a',
      classes: ['footer__link'],
      attrib: [
        {
          name: 'href',
          value:
            'https://www.figma.com/community/file/1084493668769923289/educational-kids-game',
        },
        { name: 'target', value: '_blank' },
      ],
      textContent: 'Nidhi Pandya',
    });
    copyright.append(copyrightTitle, copyrightLink);
    design.append(designTitle, designLink);
    wrapper.append(copyright, year, design);
    this.footer.append(wrapper);
  }

  return = () => {
    return this.footer;
  };
}
