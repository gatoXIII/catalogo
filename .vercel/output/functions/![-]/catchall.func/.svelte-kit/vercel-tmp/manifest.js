export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DHailfSf.js",app:"_app/immutable/entry/app.DRrpC8Zk.js",imports:["_app/immutable/entry/start.DHailfSf.js","_app/immutable/chunks/6uIGZX0H.js","_app/immutable/chunks/VwrJ_jBZ.js","_app/immutable/chunks/BWp1LszE.js","_app/immutable/entry/app.DRrpC8Zk.js","_app/immutable/chunks/VwrJ_jBZ.js","_app/immutable/chunks/ClsFpFEz.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js')),
			__memo(() => import('../output/server/nodes/14.js')),
			__memo(() => import('../output/server/nodes/15.js')),
			__memo(() => import('../output/server/nodes/16.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/categorias",
				pattern: /^\/api\/categorias\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/categorias/_server.js'))
			},
			{
				id: "/api/configuracion",
				pattern: /^\/api\/configuracion\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/configuracion/_server.js'))
			},
			{
				id: "/api/marcas",
				pattern: /^\/api\/marcas\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/marcas/_server.js'))
			},
			{
				id: "/api/pedidos",
				pattern: /^\/api\/pedidos\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/pedidos/_server.js'))
			},
			{
				id: "/api/productos",
				pattern: /^\/api\/productos\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/productos/_server.js'))
			},
			{
				id: "/api/test",
				pattern: /^\/api\/test\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/test/_server.js'))
			},
			{
				id: "/carrito",
				pattern: /^\/carrito\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(admin)/categorias",
				pattern: /^\/categorias\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(admin)/configuracion",
				pattern: /^\/configuracion\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(admin)/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(auth)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/logout/_server.js'))
			},
			{
				id: "/(admin)/marcas",
				pattern: /^\/marcas\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(admin)/marcas/nuevo",
				pattern: /^\/marcas\/nuevo\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(admin)/marcas/[id]/editar",
				pattern: /^\/marcas\/([^/]+?)\/editar\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(admin)/mensajes",
				pattern: /^\/mensajes\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(admin)/pedidos",
				pattern: /^\/pedidos\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(admin)/productos",
				pattern: /^\/productos\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(admin)/productos/nuevo",
				pattern: /^\/productos\/nuevo\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(admin)/productos/[id]/editar",
				pattern: /^\/productos\/([^/]+?)\/editar\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
