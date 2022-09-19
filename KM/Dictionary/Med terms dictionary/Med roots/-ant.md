---
tags: [" #medroot"]
aliases: []
roots: [-ant]
forms: [suffix, adjective, noun]
alphabet:: A
definition: ["'forms present participle'", person/thing that does something]
---
>[!Note] DEFINITION of -ant
>1. forms present-participle adjectives: add "-ing" to a verb to form an adjective
>2. forms nouns:  person/thing that does something
_____
>[!info]+ ETYMOLOGY of -ant
>#latin
_____
>[!example]+ RELATED TERMS to -ant
>
| [[-ant]]  | pp  | person/thing that does something |
|:---------:|:---:|:--------------------------------:|
| [[-ent]]  | YES |               YES                |
| [[-ient]] | YES |               YES                |
_____
>[!tip]+ DERIVATIONS of -ant
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]


