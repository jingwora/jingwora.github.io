---
tags: [" #medroot"]
aliases: [cat-]
forms: [prefix]
roots: [cata-, cat-]
alphabet:: C
definition: [downward, disordered]
---
>[!Note] DEFINITION of cata-
>1. downward
>2. disordered
_____
>[!info]+ ETYMOLOGY of cata-
>#greek
>- cat- before "h" or  {vowel}
_____
>[!example]+ RELATED TERMS to cata-
>
_____
>[!tip]+ DERIVATIONS of cata-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]