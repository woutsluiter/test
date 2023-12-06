# vite-twig-scss-typescript-bootstrap-starter
This is a starter repo to get you up and running with Twig, Scss, Typescript and Bootstrap. It is powered by [Vituum](https://vituum.dev/), a powerfull prototyping tool with [Vite](https://vitejs.dev/) under the hood ⚡.

## Installation
```
npm install
```

## Usage

##### Development
```
npm run dev
```

##### Preview
```
npm run build && npm run preview
```

## Structure

```
    .
    ├── dist             # Generated files (ignore)
    ├── public           # Place for static assets like images which you reference with /absolute paths
    └── src              
        ├── pages        # Main *.twig files with index.twig as homepage of course
        ├── scripts      # *.ts
        ├── styles       # *.scss
        └── templates    # Subtemplate *.twig files
```  
## Notes

- To keep things simple Bootstrap is simply imported from a CDN via link+script tags. You _could_ add it via npm and have control over all sorts of configuration, but that seemed overkill for the purpose.
