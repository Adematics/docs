(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{659:function(t,a,e){"use strict";e.r(a);var s=e(9),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"clustermetadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clustermetadata"}},[t._v("#")]),t._v(" ClusterMetadata")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.gcp.gke.ClusterMetadata"')]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("Get cluster metadata.")])]),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("blockquote",[e("p",[t._v("Fetch a gke cluster metadata")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cluster_metadata"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.gcp.gke.ClusterMetadata"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gke-metas"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("projectId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("project"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("id\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zone")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" eu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("west"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1c\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clusterId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cluster"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("id\n")])])]),e("h2",{attrs:{id:"inputs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),e("h3",{attrs:{id:"clusterid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clusterid"}},[t._v("#")]),t._v(" "),e("code",[t._v("clusterId")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ✔️")])]),t._v(" "),e("blockquote",[e("p",[t._v("Cluster id where meta data are fetch")])]),t._v(" "),e("h3",{attrs:{id:"clusterprojectid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clusterprojectid"}},[t._v("#")]),t._v(" "),e("code",[t._v("clusterProjectId")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("Project ID in GCP were is located cluster")])]),t._v(" "),e("h3",{attrs:{id:"clusterzone"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clusterzone"}},[t._v("#")]),t._v(" "),e("code",[t._v("clusterZone")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("Cluster zone in GCP")])]),t._v(" "),e("h3",{attrs:{id:"projectid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#projectid"}},[t._v("#")]),t._v(" "),e("code",[t._v("projectId")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("The GCP project id")])]),t._v(" "),e("h3",{attrs:{id:"scopes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scopes"}},[t._v("#")]),t._v(" "),e("code",[t._v("scopes")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("array")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),e("li",[e("strong",[t._v("Default:")]),t._v(" "),e("code",[t._v("[https://www.googleapis.com/auth/cloud-platform]")])])]),t._v(" "),e("blockquote",[e("p",[t._v("The GCP scopes to used")])]),t._v(" "),e("h3",{attrs:{id:"serviceaccount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serviceaccount"}},[t._v("#")]),t._v(" "),e("code",[t._v("serviceAccount")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("The GCP service account key")])]),t._v(" "),e("h2",{attrs:{id:"outputs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),e("h3",{attrs:{id:"clusteripv4cidr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clusteripv4cidr"}},[t._v("#")]),t._v(" "),e("code",[t._v("clusterIpv4Cidr")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("h3",{attrs:{id:"createtime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#createtime"}},[t._v("#")]),t._v(" "),e("code",[t._v("createTime")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" "),e("code",[t._v("description")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("h3",{attrs:{id:"endpoint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#endpoint"}},[t._v("#")]),t._v(" "),e("code",[t._v("endpoint")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("h3",{attrs:{id:"link"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[t._v("#")]),t._v(" "),e("code",[t._v("link")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("h3",{attrs:{id:"location"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[t._v("#")]),t._v(" "),e("code",[t._v("location")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("h3",{attrs:{id:"loggingservice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loggingservice"}},[t._v("#")]),t._v(" "),e("code",[t._v("loggingService")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("h3",{attrs:{id:"masterauth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#masterauth"}},[t._v("#")]),t._v(" "),e("code",[t._v("masterAuth")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("object")])])]),t._v(" "),e("h3",{attrs:{id:"masterauth-clientcertificat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#masterauth-clientcertificat"}},[t._v("#")]),t._v(" "),e("code",[t._v("masterAuth.clientCertificat")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("h3",{attrs:{id:"masterauth-clientkey"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#masterauth-clientkey"}},[t._v("#")]),t._v(" "),e("code",[t._v("masterAuth.clientKey")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("h3",{attrs:{id:"masterauth-clustercertificat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#masterauth-clustercertificat"}},[t._v("#")]),t._v(" "),e("code",[t._v("masterAuth.clusterCertificat")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("h3",{attrs:{id:"masterauth-password"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#masterauth-password"}},[t._v("#")]),t._v(" "),e("code",[t._v("masterAuth.password")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("h3",{attrs:{id:"masterauth-username"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#masterauth-username"}},[t._v("#")]),t._v(" "),e("code",[t._v("masterAuth.username")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("blockquote",[e("p",[t._v("The username to use for HTTP basic authentication to the master endpoint.")])]),t._v(" "),e("p",[t._v("For clusters v1.6.0 and later, basic authentication can be disabled byleaving username unspecified (or setting it to the empty string).")]),t._v(" "),e("h3",{attrs:{id:"monitoringservice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#monitoringservice"}},[t._v("#")]),t._v(" "),e("code",[t._v("monitoringService")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("h3",{attrs:{id:"name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" "),e("code",[t._v("name")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("h3",{attrs:{id:"network"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#network"}},[t._v("#")]),t._v(" "),e("code",[t._v("network")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("h3",{attrs:{id:"nodepools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodepools"}},[t._v("#")]),t._v(" "),e("code",[t._v("nodePools")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("array")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[t._v("object")])])]),t._v(" "),e("h3",{attrs:{id:"nodepoolscount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodepoolscount"}},[t._v("#")]),t._v(" "),e("code",[t._v("nodePoolsCount")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("integer")])])]),t._v(" "),e("h3",{attrs:{id:"project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#project"}},[t._v("#")]),t._v(" "),e("code",[t._v("project")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("h3",{attrs:{id:"subnetwork"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subnetwork"}},[t._v("#")]),t._v(" "),e("code",[t._v("subNetwork")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("h3",{attrs:{id:"zone"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zone"}},[t._v("#")]),t._v(" "),e("code",[t._v("zone")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);