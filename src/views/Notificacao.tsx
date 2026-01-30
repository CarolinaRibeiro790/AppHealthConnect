import React, { useMemo, useCallback, memo } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { styles } from '@/style/stylesNotificacao';
import { colors } from '@/theme';
import { ConsultaDTO } from '@/dto/ConsultaDTO';

const Notificacao = () => {
    const [mostrarNaoLidas, setMostrarNaoLidas] = React.useState(false);

    const notificacao: ConsultaDTO[] = [
        {
            id: '1',
            service: 'Iridologia',
            date: '30/01/2026',
            hour: '13:30 - 14:30',
            doctor: 'Dra. Tais Prates',
            visualizado: 0
        },
        {
            id: '2',
            service: 'Acupuntura',
            date: '04/02/2026',
            hour: '09:00 - 10:00',
            doctor: 'Dr. Tais Prates',
            visualizado: 1
        },
        {
            id: '3',
            service: 'Massagem Terapêutica',
            date: '06/02/2026',
            hour: '15:00 - 16:00',
            doctor: 'Dra. Tais Prates',
            visualizado: 0
        },
    ];


    const handleMarkAsRead = useCallback((id: string) => {
        console.log('Mark as read:', id);
    }, []);


    const naoLidas = useMemo(() => {
        const todasNotificacoes = [...notificacao];
        const notificacoesUnicas = todasNotificacoes.filter(
            (item, index, self) => self.findIndex(n => n.id === item.id) === index
        );
        return notificacoesUnicas.filter((item) => !item.visualizado).length;
    }, [notificacao]);


    const notificacoesFiltradas = useMemo(() => {
        if (mostrarNaoLidas) {
            return notificacao.filter((item) => !item.visualizado);
        }
        return notificacao;
    }, [mostrarNaoLidas, notificacao]);


    const ItemNotificacao = memo(({ item }: { item: ConsultaDTO }) => {
        const isUnread = !item.visualizado;

        return (
            <TouchableOpacity
                style={[
                    styles.notificationItem,
                    isUnread ? styles.notificationItemUnread : styles.notificationItemRead,
                ]}
                onPress={() => handleMarkAsRead(item.id)}
                activeOpacity={0.6}
            >
                {isUnread && <View style={styles.unreadBadge} />}

                <View style={styles.notificationContent}>
                    <Text style={[styles.serviceName, { color: colors.black }]}>
                        {item.service}
                    </Text>

                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Data</Text>
                        <Text style={styles.infoText}>{item.date}</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Hora</Text>
                        <Text style={styles.infoText}>{item.hour}</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Dra.</Text>
                        <Text style={styles.infoText}>{item.doctor}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    });

    ItemNotificacao.displayName = 'ItemNotificacao';

    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.title}>Notificações</Text>
                    {naoLidas > 0 && (
                        <View style={styles.unreadCounter}>
                            <Text style={styles.unreadCounterText}>{naoLidas}</Text>
                        </View>
                    )}
                </View>
            </View>

            <TouchableOpacity
                style={styles.filterButton}
                onPress={() => setMostrarNaoLidas(!mostrarNaoLidas)}
                activeOpacity={0.7}
            >
                <Text style={styles.filterText}>
                    {mostrarNaoLidas ? '✓ Mostrar todas' : '↓ Mostrar não lidas'}
                </Text>
            </TouchableOpacity>


            <FlatList
                data={notificacoesFiltradas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ItemNotificacao item={item} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
                scrollEnabled={notificacoesFiltradas.length > 0}
                ListEmptyComponent={() => (
                    <View style={styles.emptyContainer}>
                        <Text style={{ ...styles.emptyIcon }}>📭</Text>
                        <Text style={styles.emptyText}>
                            {mostrarNaoLidas
                                ? 'Nenhuma notificação não lida'
                                : 'Nenhuma notificação encontrada'}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};

export default Notificacao;