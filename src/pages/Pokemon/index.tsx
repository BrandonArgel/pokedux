import * as React from "react";
import { Button, Space, Table, theme } from "antd";
import type { TableColumnsType } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { AppDispatch, RootState, fetchPokemon } from "@slices";
import { setFavorite } from "@slices/pokemonsSlice";
import { Card } from "@components";
import { PokemonCardModel } from "@models";
import { capitalize, cardColors, formatter } from "@utils";
import styles from "./Pokemon.module.scss";

interface DataType {
  key: React.Key;
  abilities: string;
  "base experience": string;
  height: string;
  weight: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Abilities",
    dataIndex: "abilities",
    key: "abilities",
  },
  {
    title: "Base experience",
    dataIndex: "base experience",
    key: "base experience",
  },
  {
    title: "Height",
    dataIndex: "height",
    key: "height",
  },
  {
    title: "Weight",
    dataIndex: "weight",
    key: "weight",
  },
];

const { useToken } = theme;

export const Pokemon = () => {
  const navigate = useNavigate();
  const { token } = useToken();
  const dispatch = useDispatch<AppDispatch>();
  const { name } = useParams();
  const { errorPokemon, loadingPokemon, pokemon } = useSelector(
    (state: RootState) => state.data,
    shallowEqual
  );

  const {
    id = 0,
    image = "",
    types = ["normal", "flying"],
    isFavorite = false,
  } = pokemon || {};
  const { types: prevTypes = ["normal", "flying"] } = pokemon?.prev || {};
  const { types: nextTypes = ["normal", "flying"] } = pokemon?.next || {};

  const { background, color } = cardColors(types, 50);
  const { background: prevBackground, color: prevColor } = cardColors(
    prevTypes,
    50
  );
  const { background: nextBackground, color: nextColor } = cardColors(
    nextTypes,
    50
  );

  console.log({ background, color });

  const handleFavorite = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    _pokemon: PokemonCardModel
  ) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setFavorite(_pokemon));
  };

  React.useEffect(() => {
    const initialRequest = () => {
      dispatch(fetchPokemon(String(name)));
    };

    initialRequest();
  }, [dispatch, name]);

  React.useEffect(() => {
    if (!loadingPokemon && pokemon === null) {
      navigate("/");
    }
  }, [loadingPokemon, pokemon, navigate]);

  if (loadingPokemon) {
    return <div>Loading...</div>;
  }

  if (errorPokemon) {
    return <div>{errorPokemon}</div>;
  }

  const data: DataType[] = [
    {
      key: "1",
      abilities: formatter.format(pokemon?.abilities || []),
      "base experience": String(pokemon?.base_experience) || "",
      height: String(pokemon?.height) || "",
      weight: String(pokemon?.weight) || "",
    },
  ];

  return (
    <div className={styles.container}>
      <Space className={styles.buttons}>
        <Button
          className={`${styles.button} ${styles.prev}`}
          type="primary"
          onClick={() => navigate(`/pokemon/${pokemon?.prev?.name}`)}
          disabled={loadingPokemon}
          style={{
            background: prevBackground,
            color: prevColor,
          }}
        >
          {`${pokemon?.prev?.id}.° ${capitalize(String(pokemon?.prev?.name))}`}
        </Button>
        <Button
          className={`${styles.button} ${styles.next}`}
          type="primary"
          onClick={() => navigate(`/pokemon/${pokemon?.next?.name}`)}
          disabled={loadingPokemon}
          style={{
            background: nextBackground,
            color: nextColor,
          }}
        >
          {`${pokemon?.next?.id}.° ${capitalize(String(pokemon?.next?.name))}`}
        </Button>
      </Space>
      <div className={styles.card}>
        <Card
          id={id}
          name={String(name)}
          image={image}
          types={types}
          isFavorite={isFavorite}
          handleFavorite={handleFavorite}
        />
      </div>
      <Table<DataType>
        bordered
        columns={columns}
        dataSource={data}
        pagination={false}
        size="small"
        className={styles.table}
      />
      <div className={styles.bars}>
        {pokemon?.stats && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={200}
              data={pokemon?.stats}
              margin={{
                top: 5,
                right: 5,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                padding={{ left: 10 }}
                dataKey="name"
                tickSize={0}
                axisLine={false}
                tick={{
                  fill: token.colorText,
                  fontSize: 14,
                }}
              />
              <YAxis
                padding={{ bottom: 10, top: 10 }}
                tickCount={6}
                axisLine={false}
                tickSize={0}
                tick={{
                  fill: token.colorText,
                }}
              />
              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  background: token.colorBgContainer,
                  color: token.colorText,
                  border: `1px solid ${token.colorBorder}`,
                }}
              />
              <Bar
                dataKey="value"
                fill={color}
                barSize={24}
                radius={[4, 4, 4, 4]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};
