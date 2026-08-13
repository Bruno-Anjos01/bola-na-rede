def triagem_simbolica(queixa):
    queixa = queixa.lower()
    
    # Tentativa de cobrir casos de emergência via regras manuais
    if "sangue" in queixa or "desmaio" in queixa or "respirar" in queixa:
        return "ALTA: Vá ao hospital imediatamente."
    
    # Tentativa de cobrir casos médios
    elif "febre" in queixa or "dor forte" in queixa:
        return "MÉDIA: Agende uma consulta para hoje."
        
    # Caso padrão
    elif "dor" in queixa or "incômodo" in queixa:
        return "BAIXA: Observe os sintomas."
    
    else:
        return "ERRO: Não compreendi a queixa. Seja mais específico."

# Área de Testes (Execute o código com estas frases)
print(triagem_simbolica("cabeça dor forte."))
print(triagem_simbolica("Sinto uma pressão no peito e falta de ar."))
