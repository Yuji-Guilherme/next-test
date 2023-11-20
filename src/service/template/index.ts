import path from 'path';
import { promises as fs } from 'fs';

interface TemplateConfig {
  pages: {
    home: {
      title: string;
    };
    pageId: {
      title: string;
    };
  };
}

const templateService = async () => {
  try {
    const pathName = path.resolve('.', 'template-config.json');
    const response = await fs.readFile(pathName, 'utf8');

    const templateConfig: TemplateConfig = JSON.parse(response);
    return templateConfig.pages;
  } catch {
    throw new Error('Template request failed');
  }
};

export { templateService };
