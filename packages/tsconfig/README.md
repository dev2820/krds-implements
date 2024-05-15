# @krds/tsconfig

이 패키지는 TypeScript 프로젝트를 위한 기본적인 `tsconfig.json` 설정을 제공합니다. 프로젝트 시작점으로 사용하거나, 필요에 따라 커스터마이징하여 사용할 수 있습니다.

## 사용 방법

package.json 파일에 @krds/tsconfig를 추가해주세요:

```json
// packages/my-package/package.json

{
  "devDependencies": {
    "@krds/tsconfig": "workspace:*"
  }
}
```

이후 아래와 같이 tsconfig.json 파일에서 base.json을 사용할 수 있습니다:

```json
// packages/my-package/tsconfig.json
// 파일이 존재하지 않는 경우, 새로 생성해주세요.

{
  "extends": "tsconfig/base.json"
}
```
