import React from 'react';
import s from './Task4.module.css';

const Task4 = () => {
  return <div className={s.TaskField}>This is Task4</div>;
};

export default Task4;

// Задача:
// Необходимо разработать алгоритм, позволяющий определить порядок задействования
// топливных капсул ионных двигателей спутника для совершения заранее заданного ряда
// маневров.Капсулы имеют 5 разновидностей, и разработаны для получения прироста
// скорости в 2, 4, 6, 8 или 10 м / с.Каждый маневр требует получить прирост скорости от 1
// до 12 м / с.Для совершения одного маневра спутник может одновременно использовать
// два двигателя:
// ● первый - позволяет получить прирост скорости равный значению используемой
// капсулы.Например, для капсулы 4 м / с, прирост будет ровно 4 м / с.
// ● второй - позволяет получить прирост скорости равный половине значения
// капсулы.Например, для капсулы 4 м / с, прирост будет ровно 2 м / с.
// Для совершения одного маневра запускать каждый двигатель можно максимум один раз.
// 	Также, для одного маневра, допускается суммарный прирост скорости меньше
// sysgears.com
// hr@sysgears.com
// требуемого(например если запаса капсул недостаточно), но превышение заданного
// приращения скорости запрещено.Капсулы невозможно использовать повторно.
// Алгоритм должен определять такой порядок использования капсул, при котором сумма
// приращений скорости по всем маневрам, и при соблюдении всех условий, будет
// максимальной, задавая таким образом наиболее точную траекторию.Количество
// маневров, допустимое приращение скорости на каждом из них, а также доступный набор
// капсул может быть произвольным.
// Мы рекомендуем решать эту задачу используя генетический алгоритм(возможно, с
// определенными модификациями).
// Входящие параметры:
// JSON объект, содержащий массив произвольной длины с целыми положительными
// приращениями скорости, которые требуется достичь на каждом из маневров(corrections);
// и массив произвольной длины содержащий список доступных топливных капсул(cells),
// 	например:
// { “corrections”: [1, 12, 7, 1], “cells”: [8, 4, 6, 2, 2] }
// Выходные данные:
// JSON объект, содержащий последовательность использования капсул для первого
// двигателя(main_thruster); последовательность использования капсул для второго
// двигателя(sec_thruster); и итоговое полученное приращение скорости(delta_velocity).
// 	Например:
// { “main_thruster”: [0, 8, 6, 0], “sec_thruster”: [2, 4, 2, 0], “delta_velocity”: 18 }
