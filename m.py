hash={
"e":"e",
    "a":"a",
    
    "b":"a",
    "b":"a"

}

freq_words = sorted(hash, key=lambda x: (hash[x],x))
print(freq_words)

def str_hash(s):
    hash = 0
    for i in range(len(s)):
        chr = ord(s[i])
        hash = ((hash << 5) - hash) + chr
        hash = hash & 0xFFFFFFFF
    return hash

print(str_hash("PUT LONG STRING HERE"))
