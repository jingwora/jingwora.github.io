---
tags: [" #medroot"]
aliases: []
roots: [-itis]
forms: [suffix, noun]
alphabet:: I
definition: [inflammation, inflamed condition]
---
>[!Note] DEFINITION of -itis
>forms nouns: inflammation, inflamed condition
_____
>[!info]+ ETYMOLOGY of -itis
>#greek
_____
>[!example]+ RELATED TERMS to -itis
>
_____
>[!tip]+ DERIVATIONS of -itis
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]