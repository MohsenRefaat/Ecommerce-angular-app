import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '', // الصفحة الرئيسية فقط
    renderMode: RenderMode.Prerender
  },
  {
    path: 'products/:pid',
    renderMode: RenderMode.Server  // أو NoPrerender
  },
  {
    path: '**',
    renderMode: RenderMode.Server // باقي المسارات العشوائية
  }
];
