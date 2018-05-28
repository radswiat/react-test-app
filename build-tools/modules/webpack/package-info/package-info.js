import fs from 'fs';
import path from 'path';

export default (packagePath = 'package.json') => {
  const packageJsonPath = path.resolve(process.cwd(), packagePath);
  let packageInfo = fs.readFileSync(packageJsonPath, 'utf-8');
  packageInfo = JSON.parse(packageInfo);
  return packageInfo;
};
