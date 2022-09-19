---
tags: [" #medroot"]
aliases: []
roots: [phylac-]
forms: [combining]
alphabet:: P
definition: [protection]
---
>[!Note] DEFINITION of phylac-
>protection (against disease)
>*see also: [[immun-]]*
_____
>[!info]+ ETYMOLOGY of phylac-
>#greek phylattein
_____
>[!example]+ RELATED TERMS to phylac-
>
_____
>[!tip]+ DERIVATIONS of phylac-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]