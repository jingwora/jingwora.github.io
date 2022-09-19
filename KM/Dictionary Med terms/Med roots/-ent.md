---
tags: [" #medroot"]
aliases: []
roots: [-ent]
forms: [suffix, adjective, noun]
alphabet:: E
definition: ["'forms present participle'", person/thing that does something]
---
>[!Note] DEFINITION of -ent
>1. forms present-participle adjectives: add "-ing" to a verb to form an adjective
>2. forms nouns: person;thing that does something
_____
>[!info]+ ETYMOLOGY of -ent
>#latin
_____
>[!example]+ RELATED TERMS to -ent
>
>| [[-ent]]  | pp  | person/thing that does something |
|:---------:|:---:|:--------------------------------:|
| [[-ant]]  | YES |               YES                |
| [[-ient]] | YES |               YES                |
>
_____
>[!tip]+ DERIVATIONS of -ent
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
______
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]