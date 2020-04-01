# IsHotDog NPM Package

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][[projects](https://console.cloud.google.com/project)].
2.  [Enable billing for your project][[billing](https://support.google.com/cloud/answer/6293499#enable-billing)].
3.  [Enable the Google Cloud Vision API API][[enable_api](https://console.cloud.google.com/flows/enableapi?apiid=vision.googleapis.com)].
4.  [Set up authentication with a service account][[auth](https://cloud.google.com/docs/authentication/getting-started)] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install ishotdog
```

### Using the client NodeJS library

```javascript
const isHotDog = require('ishotdog')

const gcKeyFile = './GCKeyFile.json'

const projectId = "myProjectId"
const image = "IMAGE_URL"

isHotDog.notHotDog(gcKeyFile, projectId, image)
.then(isHotDog => console.log(isHotDog))
```

## License

ISC

See [LICENSE](https://github.com/dhsustainer/ishotdog/blob/master/LICENSE)