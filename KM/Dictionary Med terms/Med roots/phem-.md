---
tags: [" #medroot"]
aliases: []
roots: [phem-]
forms: [combining]
alphabet:: P
definition: [speech]
---
>[!Note] DEFINITION of phem-
>speech
>*see also: [[lal-]] (talk), [[pha-]] (speak)*
_____
>[!info]+ ETYMOLOGY of phem-
>#greek pheme
_____
>[!example]+ RELATED TERMS to phem-
>
_____
>[!tip]+ DERIVATIONS of phem-
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