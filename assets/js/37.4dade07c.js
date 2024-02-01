(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{329:function(s,a,t){"use strict";t.r(a);var n=t(11),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"ファイルフォーマット規約"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ファイルフォーマット規約"}},[s._v("#")]),s._v(" ファイルフォーマット規約")]),s._v(" "),a("h3",{attrs:{id:"フォーマット"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#フォーマット"}},[s._v("#")]),s._v(" フォーマット")]),s._v(" "),a("p",[s._v("OpenAPI ドキュメントは JSON 形式、YAML 形式いずれかのフォーマットで記載できるが "),a("strong",[s._v("YAML 形式")]),s._v(" を利用する。")]),s._v(" "),a("p",[s._v("理由として、JSON と比較して YAML は視覚的に見やすく、レビューや差分管理が行いやすいためである。")]),s._v(" "),a("h3",{attrs:{id:"ファイル名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ファイル名"}},[s._v("#")]),s._v(" ファイル名")]),s._v(" "),a("p",[s._v("ファイルの拡張子は "),a("code",[s._v("yaml")]),s._v(" とする。通常ファイル名は "),a("code",[s._v("api.yaml")]),s._v(" や "),a("code",[s._v("swagger.yaml")]),s._v("（v2の場合） を推奨する。")]),s._v(" "),a("p",[s._v("もし、複数の Swagger 定義を管理するため区別したい場合は "),a("code",[s._v("${service}_api.yaml")]),s._v(" とする。")]),s._v(" "),a("p",[a("code",[s._v("${service}")]),s._v(" にはサービス名を指定する")]),s._v(" "),a("h3",{attrs:{id:"yamlバージョン"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yamlバージョン"}},[s._v("#")]),s._v(" YAMLバージョン")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://yaml.org/spec/1.2.2/#61-indentation-spaces",target:"_blank",rel:"noopener noreferrer"}},[s._v("YAML v1.2"),a("OutboundLink")],1),s._v("を用いる。")]),s._v(" "),a("h3",{attrs:{id:"ファイルレイアウト"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ファイルレイアウト"}},[s._v("#")]),s._v(" ファイルレイアウト")]),s._v(" "),a("ul",[a("li",[s._v("ファイルの最終行には空行を入れる")]),s._v(" "),a("li",[s._v("文字コードは UTF-8 とする")]),s._v(" "),a("li",[s._v("タブは半角スペース 2 つとする")])]),s._v(" "),a("h3",{attrs:{id:"クォート"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#クォート"}},[s._v("#")]),s._v(" クォート")]),s._v(" "),a("p",[s._v("クォートは可読性を上げるために、できる限り利用しない。利用する場合はダブルクォートを利用する。")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OK")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 何かしらの説明\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# NG（クォートでのラップは不要）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'何かしらの説明'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"何かしらの説明"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("以下の場合は必須で利用する")]),s._v(" "),a("ul",[a("li",[s._v('文字列として認識させる必要のある数字（"0123"）')]),s._v(" "),a("li",[s._v('60 進数と認識させたくない場合（"12:34"）')]),s._v(" "),a("li",[s._v('Bool として認識させたくない（"true", "false", "yes", "no", "y", "n", "on", "off"）')]),s._v(" "),a("li",[a("code",[s._v("#")]),s._v(" で始まる文字列（"),a("code",[s._v("#")]),s._v(" はコメントを示す記号のためである。例: "),a("code",[s._v("#/definitions/Users")]),s._v("）")])]),s._v(" "),a("h3",{attrs:{id:"yaml配列スタイル"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yaml配列スタイル"}},[s._v("#")]),s._v(" YAML配列スタイル")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("複数項目を指定する場合は、 "),a("strong",[s._v("Flow style(配列スキーム)")]),s._v(" を用いることを推奨する")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OK（推奨: 配列リテラル構文）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" user_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" account_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" register_at"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# NG（非推奨: リスト構文）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" user_id\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" user_name\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" account_type\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" register_at\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[s._v("YAML は項目定義がネストすることで縦長な定義になりやすい。情報密度を上げるために配列リテラルを推奨する")])])])]),s._v(" "),a("h3",{attrs:{id:"改行の表現"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#改行の表現"}},[s._v("#")]),s._v(" 改行の表現")]),s._v(" "),a("p",[s._v("改行を含む場合は、パイプ（ブロックスカラー） "),a("code",[s._v("|")]),s._v(" を用いる")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n  説明文1\n  説明文2\n     - 箇条書き1\n     - 箇条書き2\n     - 箇条書き3")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);