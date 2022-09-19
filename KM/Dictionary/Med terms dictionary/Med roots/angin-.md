---
tags: [" #medroot"]
aliases: []
roots: [angin-]
forms: [combining]
alphabet:: A
definition: [choking pain, angina pectoris]
---
>[!Note] DEFINITION of angin-
>choking pain, angina pectoris (chest pain)
>*see also: [[odyn-]], [[alg-]] (pain)*
_____
>[!info]+ ETYMOLOGY of angin-
>#latin angina
_____
>[!example]+ RELATED TERMS to angin-
>
_____
>[!tip]+ DERIVATIONS of angin-
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