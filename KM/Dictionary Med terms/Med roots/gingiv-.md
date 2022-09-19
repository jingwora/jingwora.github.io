---
tags: [" #medroot"]
aliases: []
roots: [gingiv-]
forms: [combining]
alphabet:: G
definition: [gum]
---
>[!Note] DEFINITION of gingiv-
>gum (of the mouth)
_____
>[!info]+ ETYMOLOGY of gingiv-
>#latin gingiva
_____
>[!example]+ RELATED TERMS to gingiv-
>
_____
>[!tip]+ DERIVATIONS of gingiv-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]