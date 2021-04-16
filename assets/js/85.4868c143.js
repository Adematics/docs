(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{763:function(t,s,a){"use strict";a.r(s);var e=a(9),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"kestra-flow-resource"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kestra-flow-resource"}},[t._v("#")]),t._v(" kestra_flow (Resource)")]),t._v(" "),a("p",[t._v("Manages a Kestra Flow.")]),t._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),a("div",{staticClass:"language-hcl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hcl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("resource "),a("span",{pre:!0,attrs:{class:"token type variable"}},[t._v('"kestra_flow"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.mynamespace"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flow_id")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-flow"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token heredoc string"}},[t._v('<<EOT\ninputs:\n  - name: my-value\n    type: STRING\n    required: true\n\nvariables:\n  first: "1"\n\ntasks:\n  - id: t2\n    type: io.kestra.core.tasks.debugs.Echo\n    format: first {{task.id}}\n    level: TRACE\n\ntaskDefaults:\n  - type: io.kestra.core.tasks.debugs.Echo\n    values:\n      format: third {{flow.id}}\nEOT')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),t._v(" "),a("h2",{attrs:{id:"schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schema"}},[t._v("#")]),t._v(" Schema")]),t._v(" "),a("h3",{attrs:{id:"required"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#required"}},[t._v("#")]),t._v(" Required")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("content")]),t._v(" (String) The flow full content in yaml string.")]),t._v(" "),a("li",[a("strong",[t._v("flow_id")]),t._v(" (String) The flow id.")]),t._v(" "),a("li",[a("strong",[t._v("namespace")]),t._v(" (String) The flow namespace.")])]),t._v(" "),a("h3",{attrs:{id:"optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optional"}},[t._v("#")]),t._v(" Optional")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("id")]),t._v(" (String) The ID of this resource.")])])])}),[],!1,null,null,null);s.default=r.exports}}]);