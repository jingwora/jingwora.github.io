---
tags: [" #medroot"]
aliases: []
roots: [pyrex-]
forms: [combining]
alphabet:: P
definition: [be feverish]
---
>[!Note] DEFINITION of pyrex-
>be feverish
>*see also: [[febr-]], [[pyr-]], [[pyret-]] (fever)*
_____
>[!info]+ ETYMOLOGY of pyrex-
>#greek pyressein
_____
>[!example]+ RELATED TERMS to pyrex-
>
_____
>[!tip]+ DERIVATIONS of pyrex-
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